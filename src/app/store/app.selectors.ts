import { CoreState } from './index';

export const selectPokemonUrls = (state: CoreState) => state?.appState?.pokemonUrls;
export const selectPage = (state: CoreState) => state?.appState?.page;
