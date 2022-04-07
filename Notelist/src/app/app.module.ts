import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotelistComponent } from './notelist/notelist.component';
import { AddNotePanelComponent } from './notelist/add-note-panel/add-note-panel.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotelistComponent,
    AddNotePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
