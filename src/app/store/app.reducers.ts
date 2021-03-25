import { Action, createReducer, on } from '@ngrx/store';
import { clearState, setPage, setPokemonUrls } from './app.actions';
import { PokemonUrls } from '../pokemon-battle.service';

export interface AppState {
    pokemonUrls?: PokemonUrls;
    page?: PokemonUrls;
}

// Default data / initial state
export const initialState: AppState = {};


const reducer = createReducer(
    initialState,
    on(setPokemonUrls, (state, { pokemonUrls }) => ({
        ...state,
        pokemonUrls,
    })),
    on(setPage, (state, { pokemonUrls }) => ({
        ...state,
        page: pokemonUrls
    })),
    on(clearState, state => ({
        ...initialState
    }))
);


export function appReducer(state: AppState | undefined, action: Action) {
    return reducer(state, action);
}
