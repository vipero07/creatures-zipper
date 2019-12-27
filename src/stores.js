import { writable } from "svelte/store";

import { creatures3Locations } from "./locations";
import { ZipBuilder } from "./utils/zip-builder.mjs";

export const game = writable("Creatures 3");
export const locations = writable(creatures3Locations);

function createZip() {
  let zip = new ZipBuilder();
  const { subscribe, set } = writable(zip.fileStructure);

  return {
    subscribe,
    add: x => set(zip.add(x)),
    select: x => set(zip.select(x)),
    remove: x => set(zip.remove(x)),
    build: () => zip.build(),
    reset: () => {
      zip = new ZipBuilder();
      set(zip.fileStructure);
    }
  };
}

export const zip = createZip();
