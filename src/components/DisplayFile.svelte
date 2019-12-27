<script>
  import { afterUpdate } from "svelte";

  import { zip } from "../stores.js";

  export let fileName;
  export let files;

  function getSelected() {
    return files.filter(([origin, { selected }]) => selected)[0][0];
  }

  let selected = getSelected();

  afterUpdate(() => {
    selected = getSelected();
  });

  function changeSelectedFile({ currentTarget: { value } }) {
    zip.select(files.filter(([origin]) => origin === value)[0]);
  }

  function deleteFile() {
    zip.remove(files[0]);
  }
</script>

<style>
  .file-info {
    position: relative;
    margin-bottom: 10px;
  }
  .file-name {
    max-width: 75%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  select {
    display: block;
    width: calc(100% - 10px);
    margin-left: 10px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
  }
</style>

<div class="file-info">
  <div class="file-name" title={fileName}>{fileName}</div>
  <select
    class="text--light"
    bind:value={selected}
    on:input={changeSelectedFile}>
    {#each files as [origin, file] (origin)}
      <option value={origin}>{origin}</option>
    {/each}
  </select>
  <button on:click={deleteFile} class="button--reset">X</button>
</div>
