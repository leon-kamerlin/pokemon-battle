import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PokemonUrls {
    count: number;
    next: string;
    previous: string;
    results: Array<{
        name: string;
        url: string;
    }>;
}

export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class PokemonBattleService {

    constructor(private http: HttpClient) {
    }

    getPokemonUrls(url): Observable<PokemonUrls> {
        return this.http.get<PokemonUrls>(url);
    }


    getPokemon(url): Observable<Pokemon> {
        return this.http.get<Pokemon>(url);
    }
}
