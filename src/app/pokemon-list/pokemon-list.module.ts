import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';


const routes: Routes = [
    {
        path: '',
        component: PokemonListComponent
    }
];

@NgModule({
    declarations: [
        PokemonListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        FlexModule
    ]
})
export class PokemonListModule {
}
