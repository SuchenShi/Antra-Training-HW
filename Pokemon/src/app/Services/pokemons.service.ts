import { Injectable } from '@angular/core';
import { PokemonResponse } from '../interfaces/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  baseurl = "https://pokeapi.co/api/v2/pokemon";
  show: boolean =true;
  subjectSelected$ = new Subject();

  constructor(private http : HttpClient) { }

  getPokemon(pokemon : string) {
    return this.http.get([this.baseurl, pokemon].join('/')) as Observable<PokemonResponse>;
  }

  getSelect(data:string) {
    this.subjectSelected$.next(data);
  }

  getReset() {
    this.subjectSelected$.next('');
  }

}
