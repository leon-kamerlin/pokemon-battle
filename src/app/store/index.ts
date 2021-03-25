import { appReducer, AppState } from './app.reducers';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface CoreState {
    appState: AppState;
}

export const reducers: ActionReducerMap<CoreState> = {
    appState: appReducer,
};

export const metaReducers: MetaReducer[] = !environment.production ? [storeFreeze] : [];
