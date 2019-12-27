<script>
  import FileUpload from "sveltefileuploadcomponent";

  import { locations, zip } from "../stores.js";
  import { trimBefore } from "../utils/zip-builder.mjs";
  import DisplayGame from "../components/DisplayGame.svelte";

  let isMac = false;

  function newZip() {
    zip.reset();
  }

  function fileInput(result) {
    result.detail.files.forEach(loadFileIntoZip);
  }

  async function loadFileIntoZip(originalFile) {
    const { name } = originalFile;
    const inputExtension = trimBefore(".", name);

    if (inputExtension !== "zip") {
      zip.add({
        file: originalFile.arrayBuffer(),
        game: $locations.game,
        originalPath: name,
        locations: $locations
      });
      return;
    }

    const extractedZip = await JSZip.loadAsync(originalFile);
    extractedZip.forEach((path, file) => {
      if (file.dir || (!isMac && path.indexOf("__MACOSX") !== -1)) {
        return;
      }

      zip.add({
        file: file.async("Uint8Array"),
        game: $locations.game,
        originalPath: path,
        locations: $locations,
        originName: name
      });
    });
  }

  async function download() {
    window.location = "data:application/zip;base64," + (await zip.build());
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
  <button disabled={$zip.size === 0} on:click={download} type="button">
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

{#each [...$zip] as [gameName, games] (gameName)}
  <DisplayGame {gameName} games={[...games]} />
{/each}
