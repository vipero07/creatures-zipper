function getOrBuildMap(parentMap, key) {
  return parentMap.get(key) || parentMap.set(key, new Map()).get(key);
}

function buildPath({ game, folder, fileName }) {
  return `${game}/${folder}/${fileName}`;
}

export function trimBefore(last, str) {
  return str.slice(str.lastIndexOf(last) + 1);
}

export class ZipBuilder {
  constructor() {
    this.fileStructure = new Map();
    this.zipStructure = new Map();
  }

  getFileMap({ game, folder, fileName }) {
    const gameMap = getOrBuildMap(this.fileStructure, game);
    const folderMap = getOrBuildMap(gameMap, folder);
    return getOrBuildMap(folderMap, fileName);
  }

  add({ game, file, originalPath, locations, originName }) {
    const fileName = trimBefore("/", originalPath);
    const extension = trimBefore(".", fileName);
    const folder = locations[extension];

    if (!folder) {
      return this.fileStructure;
    }

    const fileMap = this.getFileMap({ game, folder, fileName });

    [...fileMap].forEach(([key, value]) => {
      fileMap.set(key, { ...value, selected: false });
    });

    fileMap.set(originName || fileName, {
      selected: true,
      file,
      fileName,
      game,
      folder
    });

    this.zipStructure.set(buildPath({ game, folder, fileName }), file);
    return this.fileStructure;
  }

  select([selectedKey, { game, folder, fileName }]) {
    const fileMap = this.getFileMap({ game, folder, fileName });
    [...fileMap].forEach(([key, value]) => {
      const selected = selectedKey === key;
      fileMap.set(key, { ...value, selected });
      if (selected) {
        this.zipStructure.set(
          buildPath({ game, folder, fileName }),
          value.file
        );
      }
    });
    return this.fileStructure;
  }

  remove([selectedKey, { game, folder, fileName }]) {
    const gameMap = getOrBuildMap(this.fileStructure, game);
    const folderMap = getOrBuildMap(gameMap, folder);
    folderMap.delete(fileName);
    if (!folderMap.size) {
      gameMap.delete(folder);
    }
    if (!gameMap.size) {
      this.fileStructure.delete(game);
    }
    this.zipStructure.delete(buildPath({ game, folder, fileName }));
    return this.fileStructure;
  }

  build(type = "base64") {
    const zip = new JSZip();
    [...this.zipStructure].forEach(([key, value]) => {
      zip.file(key, value);
    });
    return zip.generateAsync({ type });
  }
}
