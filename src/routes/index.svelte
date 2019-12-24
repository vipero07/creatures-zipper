<script>
  import { onMount } from "svelte";
  import FileUpload from "sveltefileuploadcomponent";

  import { locations } from "../_stores.js";

  let compiledZip;
  let fileStructure = new Map();

  function newZip() {
    compiledZip = new JSZip();
    fileStructure = new Map();
  }

  onMount(newZip);

  function fileInput(result) {
    result.detail.files.forEach(loadFileIntoZip);
  }

  function trimBefore(last, str) {
    return str.slice(str.lastIndexOf(last) + 1);
  }

  async function loadFileIntoZip(zipfile) {
    const zip = await JSZip.loadAsync(zipfile);
    zip.forEach(async (path, file) => {
      if (file.dir) {
        return;
      }

      const fileName = trimBefore("/", path);
      const extension = trimBefore(".", fileName);
      const folder = $locations[extension];

      if (!folder) {
        return;
      }

      if (!fileStructure.has($locations.game)) {
        fileStructure.set($locations.game, new Map());
      }

      const gameMap = fileStructure.get($locations.game);
      if (!gameMap.has(folder)) {
        gameMap.set(folder, new Map());
      }

      const folderMap = gameMap.get(folder);

      folderMap.set(fileName, zipfile.name);

      compiledZip.file(
        `${$locations.game}\\${folder}\\${fileName}`,
        await file.async("Uint8Array")
      );
    });

    fileStructure = fileStructure;
  }

  async function download() {
    const base64 = await compiledZip.generateAsync({ type: "base64" });
    window.location = "data:application/zip;base64," + base64;
  }
</script>

<style>
  h1 {
    text-align: center;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  .text--light {
    color: #aaa;
  }
  .game-section {
    display: flex;
  }
  .folder-section {
    padding-left: 10px;
  }
  .file-section {
    padding-left: 10px;
  }
  .file-uploader {
    display: block;
    border: #aaa dashed 2px;
    padding: 10px;
  }
</style>

<svelte:head>
  <title>Zip Compiler</title>
  <script
    src="https://cdn.jsdelivr.net/npm/jszip@3.2.2/dist/jszip.min.js"
    integrity="sha256-gy5W5/rXWluWXFRvMWFFMVhocfpBe7Tf4SW2WMfjs4E="
    crossorigin="anonymous">

  </script>
</svelte:head>

<FileUpload on:input={fileInput}>
  <section class="file-uploader">
    <h1>Zip Compiler</h1>
    Drag & Drop your file(s) or
    <strong>browse.</strong>
  </section>
</FileUpload>

<button on:click={download} type="button">Download</button>
<button on:click={newZip} type="button">Reset</button>

{#each [...fileStructure] as [gameName, game] (gameName)}
  <h2>{gameName}</h2>
  <section class="game-section">
    {#each [...game] as [folderName, folder] (folderName)}
      <div class="folder-section">
        <h3>{folderName}</h3>
        <div class="file-section">
          {#each [...folder] as [fileName, originalZip] (fileName)}
            <div>
              {fileName}
              <span class="text--light">{originalZip}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>
{/each}
