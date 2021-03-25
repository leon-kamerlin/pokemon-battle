import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        ShellComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        _MatMenuDirectivesModule,
        MatMenuModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
    exports: [
        ShellComponent
    ]
})
export class ShellModule {
}
