<script>
  import DisplayFolder from "./DisplayFolder.svelte";

  export let gameName;
  export let games;
</script>

<style>
  h2 {
    margin: 0.5em 0;
    font-weight: bold;
  }
</style>

<h2>{gameName}</h2>
{#each games as [folderName, folders] (folderName)}
  <DisplayFolder
    {folderName}
    folders={[...folders].sort(([a], [b]) =>
      a.toLowerCase() > b.toLowerCase() ? 1 : -1
    )} />
{/each}
