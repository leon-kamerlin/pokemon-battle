import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pokemon, PokemonBattleService } from '../pokemon-battle.service';
import { Store } from '@ngrx/store';
import { CoreState } from '../store';
import * as fromSelector from 'selectors';
import { first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { combineLatest, fromEvent } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-pokemon-battle',
    templateUrl: './pokemon-battle.component.html',
    styleUrls: ['./pokemon-battle.component.scss']
})
export class PokemonBattleComponent implements AfterViewInit {

    result: { winner: string; firstPoke: Pokemon; secondPoke: Pokemon };
    loading = false;


    constructor(private store: Store<CoreState>, private service: PokemonBattleService) {

    }

    get selectPokemonUrls$() {
        return this.store.select(fromSelector.selectPokemonUrls).pipe(
            map(data => data.results),
            first()
        );
    }

    winner = localStorage.getItem('winner');

    @ViewChild('button', { static: true, read: ElementRef })
    button: ElementRef;

    private static getRandomNumber(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    ngAfterViewInit() {
        fromEvent(this.button.nativeElement, 'click').pipe(
            tap(() => this.loading = true),
            withLatestFrom(this.selectPokemonUrls$),
            switchMap(([_, list]) => {
                const firstNum = PokemonBattleComponent.getRandomNumber(list.length);
                let secondNum = PokemonBattleComponent.getRandomNumber(list.length);
                while (secondNum === firstNum) {
                    secondNum = PokemonBattleComponent.getRandomNumber(list.length);
                }

                const firstPoke = list[firstNum];
                const secondPoke = list[secondNum];

                const urlOfWinnerOrRandomPoke = localStorage.getItem('winner') ?
                    `${environment.api}/${localStorage.getItem('winner')}` :
                    firstPoke.url;
                return combineLatest([
                    this.service.getPokemon(urlOfWinnerOrRandomPoke),
                    this.service.getPokemon(secondPoke.url)
                ]);

            }),
            tap(([firstPoke, secondPoke]) => {
                if (firstPoke.weight > secondPoke.weight) {
                    localStorage.setItem('winner', firstPoke.name);
                } else if (firstPoke.weight < secondPoke.weight) {
                    localStorage.setItem('winner', secondPoke.name);
                } else {
                    localStorage.setItem('winner', (firstPoke.height > secondPoke.height) ? firstPoke.name : secondPoke.name);
                }
                this.loading = false;
            }),
            map(([firstPoke, secondPoke]) => {
                return {
                    firstPoke,
                    secondPoke,
                    winner: localStorage.getItem('winner')
                };
            })
        ).subscribe((res) => this.result = res);
    }

}
