<script>
  import { game, defaultLocations, locations } from "../stores.js";

  export let name;
  export let folders = defaultLocations;

  $: selected = $game === name;

  function click() {
    game.set(name);
    locations.set(folders);
  }
</script>

<style>
  li {
    display: block;
    float: left;
    padding: 0.5em;
    cursor: pointer;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: 0;
  }
</style>

<li class:selected on:click={click}>{name}</li>
