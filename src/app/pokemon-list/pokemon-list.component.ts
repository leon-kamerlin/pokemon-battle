import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '../store';
import { loadInitPge, loadNextPage, loadPreviousPage } from '../store/app.actions';
import * as fromSelector from 'selectors';
import { Observable } from 'rxjs';
import { PokemonUrls } from '../pokemon-battle.service';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    pageResults$: Observable<PokemonUrls | undefined>;

    constructor(private store: Store<CoreState>) {

        this.pageResults$ = this.store.select(fromSelector.selectPage);
    }

    ngOnInit() {
        this.store.dispatch(loadInitPge());
    }

    goNext() {
        this.store.dispatch(loadNextPage());
    }

    goPrevious() {
        this.store.dispatch(loadPreviousPage());
    }
}
