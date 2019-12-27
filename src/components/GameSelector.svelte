<script>
  import GameLink from "./GameLink.svelte";

  import { dockingStationLocations, creatures3Locations } from "../locations";
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
    <GameLink name="Creatures 3" folders={creatures3Locations} />
    <GameLink name="Docking Station" folders={dockingStationLocations} />
  </ul>
</nav>
