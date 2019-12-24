<script>
  import GameSelector from "../components/GameSelector.svelte";
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<GameSelector />
<main>
  <slot />
</main>
