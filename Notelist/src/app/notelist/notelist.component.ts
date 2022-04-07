import { Component, OnInit } from '@angular/core';
import { Quicknotes } from '../interface/quicknotes';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

  titleModel: string;
  contentModel: string;
  quicknotes: Quicknotes[];

  classStyle: string;

  noteToShow?: Quicknotes;

  constructor() { 
    this.titleModel = '';
    this.contentModel = '';
    this.classStyle = '';

    const defaultQuicknotes: Quicknotes = {
      title: 'my note',
      content: 'my contnet',
     
    };

    this.quicknotes = [defaultQuicknotes,defaultQuicknotes,defaultQuicknotes];
  }

  ngOnInit(): void {
    this.noteToShow = this.quicknotes[0];
  }

  createNote() {
    const newNote: Quicknotes = {
      title: this.titleModel,
      content: this.contentModel,
    };
    this.quicknotes.push(newNote);
    this.titleModel = this.contentModel = '';
  }

  displayAddNote() {
    this.classStyle = 'note-disply';
  }

  showNoteDetail(selectedNote: Quicknotes) {
    this.noteToShow = selectedNote;
  }

  

}
