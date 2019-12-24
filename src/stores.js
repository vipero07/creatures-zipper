import { writable } from 'svelte/store';

export const game = writable('Creatures 3');

export const defaultLocations = {
    game: 'Creatures 3',
    agents: 'My Agents',
    c16: 'Images',
    s16: 'Images',
    cos: 'Bootstrap/001 World',
    catalogue: 'Catalogue',
    mng: 'Sounds',
    wav: 'Sounds',
};

export const locations = writable(defaultLocations);