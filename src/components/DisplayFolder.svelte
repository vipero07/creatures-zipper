<script>
  import DisplayFile from "./DisplayFile.svelte";

  export let folderName;
  export let folders;
</script>

<style>
  .file-section {
    padding-left: 10px;
  }
</style>

<h3>{folderName}</h3>
<div class="folder-section masonry">
  <div class="file-section">
    {#each folders as [fileName, files] (fileName)}
      <DisplayFile {fileName} files={[...files]} />
    {/each}
  </div>
</div>
