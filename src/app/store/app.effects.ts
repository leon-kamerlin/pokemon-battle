import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadInitPge, loadNextPage, loadPreviousPage, setPage, setPokemonUrls } from './app.actions';
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CoreState } from './index';
import * as fromSelector from 'selectors';
import { PokemonBattleService } from '../pokemon-battle.service';
import { EMPTY, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<CoreState>,
        private service: PokemonBattleService
    ) {
    }

    loadInitPage$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadInitPge),
            mergeMap(
                () => this.service.getPokemonUrls(`${environment.api}/??offset=0&limit=12`).pipe(
                    map(pokemonUrls => setPage({ pokemonUrls })),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

    loadNextPage$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadNextPage),
            withLatestFrom(this.store.select(fromSelector.selectPage)),
            tap(() => console.log('a')),
            switchMap(
                ([_, page]) => this.service.getPokemonUrls(page.next).pipe(
                    map(pokemonUrls => setPage({ pokemonUrls })),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

    loadPreviousPage$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadPreviousPage),
            withLatestFrom(this.store.select(fromSelector.selectPage)),
            tap(() => console.log('b')),
            switchMap(
                ([_, page]) => this.service.getPokemonUrls(page.previous).pipe(
                    map(pokemonUrls => setPage({ pokemonUrls })),
                    catchError((err) => EMPTY)
                )
            )
        )
    );
}
