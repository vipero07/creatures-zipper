<script>
  export let folderName;
  export let folder;
</script>

<style>
  .file-section {
    padding-left: 10px;
  }
</style>

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
