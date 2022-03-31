import { Component, OnInit, Input} from '@angular/core';
import { PokemonsService } from '../Services/pokemons.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: any;

  constructor(private pokemonService : PokemonsService,
              public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '250px',
      data: this.pokemon
    })
  }

}
