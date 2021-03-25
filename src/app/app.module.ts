import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitializerModule } from './initializer.module';
import { AppStoreModule } from './app-store.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonBattleModule } from './pokemon-battle/pokemon-battle.module';
import { ShellModule } from './shell/shell.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'poke-battle'
    },
    {
        path: 'poke-battle',
        loadChildren: () => import('./pokemon-battle/pokemon-battle.module').then(m => m.PokemonBattleModule)
    },
    {
        path: 'poke-list',
        loadChildren: () => import('./pokemon-list/pokemon-list.module').then(m => m.PokemonListModule)
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        InitializerModule,
        AppStoreModule,
        MatButtonModule,
        FlexLayoutModule,
        PokemonBattleModule,
        ShellModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
