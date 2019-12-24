<script>
  import DisplayFolder from "./DisplayFolder.svelte";
  export let gameName;
  export let game;
</script>

<style>
  .game-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    margin: 0.5em 0;
    font-weight: bold;
  }
</style>

<h2>{gameName}</h2>
<section class="game-section">
  {#each [...game] as [folderName, folder] (folderName)}
    <DisplayFolder {folderName} {folder} />
  {/each}
</section>
