import { Component, OnInit, Inject} from '@angular/core';
import { PokemonsService } from '../Services/pokemons.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  selected!: any[];

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
  }

  noChoose() {
    this.dialogRef.close();
  }

  choose(pokemon: any) {
    this.pokemonsService.getSelect(pokemon);
    console.log(pokemon);
    this.dialogRef.close();

  }

}
