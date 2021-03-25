import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonBattleComponent } from './pokemon-battle.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: PokemonBattleComponent
    }
];

@NgModule({
    declarations: [
        PokemonBattleComponent
    ],
    exports: [
        PokemonBattleComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        FlexModule,
        RouterModule.forChild(routes)
    ]
})
export class PokemonBattleModule {
}
