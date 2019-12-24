<script>
  import { defaultLocations } from "../stores.js";
  import GameLink from "./GameLink.svelte";
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }
</style>

<nav>
  <ul>
    <GameLink name="Creatures 3" />
    <GameLink
      name="Docking Station"
      folders={{ ...defaultLocations, game: 'Docking Station', cos: 'Bootstrap/010 Docking Station' }} />
  </ul>
</nav>
