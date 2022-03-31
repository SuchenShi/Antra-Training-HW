import { Component, OnInit  } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonsService} from './Services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokemon';
  show: boolean = true;
  selectedPokemon: String = '';

  pokemonlist!: any;
  arr: any = [];
  starterPokemon = ["bulbasaur", "squirtle", "charmander"];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit():void {
    this.pokemonsService.subjectSelected$.subscribe((data: any) => {
      if (data) {
        this.show = false;
        this.selectedPokemon = data.name;
      } else {
        this.show = true;
        this.selectedPokemon = '';
      }

      console.log(data.name);
    })

    
    for (let pokemon of this.starterPokemon) {
      this.arr.push(this.pokemonsService.getPokemon(pokemon));
    }

    forkJoin(this.arr).subscribe((data: any) => {
        this,this.pokemonlist = data;
    })
  }

  onSetback() {
    this.pokemonsService.getReset();
  }
  
}
