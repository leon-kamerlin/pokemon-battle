import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppEffects } from './store/app.effects';
import { metaReducers, reducers } from './store';


@NgModule({
    declarations: [],
    imports: [
        environment.production ? [] : StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([
            AppEffects
        ]),
        StoreModule.forRoot(reducers, { metaReducers }),
    ]
})
export class AppStoreModule {
}
