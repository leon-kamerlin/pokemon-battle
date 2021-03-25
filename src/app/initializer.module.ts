import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PokemonBattleService } from './pokemon-battle.service';
import { environment } from '../environments/environment';
import { CoreState } from './store';
import { setPokemonUrls } from './store/app.actions';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [],
    imports: [
        HttpClientModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (service: PokemonBattleService, store: Store<CoreState>) => {
                return () => {
                    return new Promise((resolve, reject) => {
                        service.getPokemonUrls(`${environment.api}?offset=0&limit=2000`).pipe(
                            first()
                        ).subscribe((pokemonUrls) => {
                            store.dispatch(setPokemonUrls({ pokemonUrls }));
                            resolve(pokemonUrls);
                        }, (err) => {
                            store.dispatch(setPokemonUrls({ pokemonUrls: null }));
                            reject(err);
                        });
                    });
                };
            },
            multi: true,
            deps: [
                PokemonBattleService,
                Store
            ]
        },


    ]
})
export class InitializerModule {
}
