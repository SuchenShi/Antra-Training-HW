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

  constructor() { 
    this.titleModel = '';
    this.contentModel = '';

    const defaultQuicknotes: Quicknotes = {
      title: 'my note',
      content: 'my contnet',
     
    };

    this.quicknotes = [defaultQuicknotes];
  }

  ngOnInit(): void {
  }

  createNote() {
    const newNote: Quicknotes = {
      title: this.titleModel,
      content: this.contentModel,
    };
    this.quicknotes.push(newNote);
    this.titleModel = this.contentModel = '';
  }

}
