<script>
  import { onMount } from "svelte";
  import FileUpload from "sveltefileuploadcomponent";

  import { locations } from "../stores.js";
  import DisplayGame from "../components/DisplayGame.svelte";

  let compiledZip;
  let isMac = false;
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

  function getFileMap(parentMap, key) {
    return parentMap.get(key) || parentMap.set(key, new Map()).get(key);
  }

  function addFileToZip({ fileName, extension, file, originalFile }) {
    const folder = $locations[extension];
    if (!folder) {
      return;
    }

    const gameMap = getFileMap(fileStructure, $locations.game);
    getFileMap(gameMap, folder).set(fileName, originalFile || fileName);

    compiledZip.file(`${$locations.game}\\${folder}\\${fileName}`, file);
    fileStructure = fileStructure;
  }

  async function loadFileIntoZip(originalFile) {
    const { name: originalName } = originalFile;
    const inputExtension = trimBefore(".", originalName);

    if (inputExtension !== "zip") {
      addFileToZip({
        fileName: originalName,
        extension: inputExtension,
        file: await originalFile.arrayBuffer()
      });
      return;
    }

    const zip = await JSZip.loadAsync(originalFile);
    zip.forEach(async (path, file) => {
      if (file.dir || (!isMac && path.indexOf("__MACOSX") !== -1)) {
        return;
      }

      const fileName = trimBefore("/", path);
      const extension = trimBefore(".", fileName);

      addFileToZip({
        fileName,
        extension,
        file: await file.async("Uint8Array"),
        originalFile: originalName
      });
    });
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

  @media (min-width: 522px) {
    h1 {
      font-size: 4em;
    }
  }

  .file-uploader {
    display: block;
    border: #aaa dashed 2px;
    padding: 10px;
  }

  .buttons {
    display: flex;
    margin-top: 6px;
    justify-content: space-evenly;
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

<div class="buttons">
  <button disabled={fileStructure.size === 0} on:click={download} type="button">
    Download
  </button>
  <label
    title="This doesn't guarentee Mac compatibility, it only removes or allows
    designated mac files.">
    Mac OSX
    <input type="checkbox" bind:checked={isMac} />
  </label>
  <button on:click={newZip} type="button" class="button--reset">Reset</button>
</div>

{#each [...fileStructure] as [gameName, game] (gameName)}
  <DisplayGame {gameName} {game} />
{/each}
