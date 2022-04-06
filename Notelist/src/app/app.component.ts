import { Component } from '@angular/core';

import { NotelistComponent } from './notelist/notelist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notelist';
}
