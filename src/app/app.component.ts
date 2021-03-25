import { AfterViewInit, Component } from '@angular/core';
import { Item } from './shell/shell.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    navItems: Item[] = [
        {
            link: 'poke-battle',
            label: 'Poke Battle'
        },
        {
            link: 'poke-list',
            label: 'Poke List'
        }
    ];

    constructor() {

    }


    ngAfterViewInit() {
    }
}
