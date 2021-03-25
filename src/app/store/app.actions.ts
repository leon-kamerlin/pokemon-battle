import { createAction, props } from '@ngrx/store';
import { PokemonUrls } from '../pokemon-battle.service';

export enum AppActionTypes {
    SET_POKEMON_URLS = '[APP] Set Pokemon Urls',
    SET_POKEMON_PAGE = '[APP] Set Pokemon Page',
    LOAD_NEXT_PAGE = '[APP] Load Next Page',
    LOAD_PREVIOUS_PAGE = '[APP] Load Previous Page',
    LOAD_INIT_PAGE = '[APP] Load Init Page',
    CLEAT_STATE = '[APP] Clear State',
}


export const setPokemonUrls = createAction(
    AppActionTypes.SET_POKEMON_URLS,
    props<{ pokemonUrls: PokemonUrls | null }>()
);

export const setPage = createAction(
    AppActionTypes.SET_POKEMON_PAGE,
    props<{ pokemonUrls: PokemonUrls }>()
);

export const loadNextPage = createAction(AppActionTypes.LOAD_NEXT_PAGE);
export const loadPreviousPage = createAction(AppActionTypes.LOAD_PREVIOUS_PAGE);
export const loadInitPge = createAction(AppActionTypes.LOAD_INIT_PAGE);
export const clearState = createAction(AppActionTypes.CLEAT_STATE);



