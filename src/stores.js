import { writable } from "svelte/store";

import { creatures3Locations } from "./locations";

export const game = writable("Creatures 3");
export const locations = writable(creatures3Locations);
