import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Item {
    link: string;
    label: string;
}

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnChanges {
    @Input()
    items: Item[] = [];


    constructor(private breakpointObserver: BreakpointObserver) {
    }


    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe([Breakpoints.Small, Breakpoints.XSmall])
        .pipe(
            map((result) => result.matches),
            shareReplay()
        );

    ngOnChanges(changes: SimpleChanges) {
    }
}
