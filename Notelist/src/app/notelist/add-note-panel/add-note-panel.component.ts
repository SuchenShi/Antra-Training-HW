import { Component, Input, OnInit } from '@angular/core';
import { Quicknotes } from '../../interface/quicknotes';

@Component({
  selector: 'app-add-note-panel',
  templateUrl: './add-note-panel.component.html',
  styleUrls: ['./add-note-panel.component.css']
})
export class AddNotePanelComponent implements OnInit {

  @Input() noteDetail?: Quicknotes;

  titleModel: string;
  contentModel: string;
  quicknotes: Quicknotes[];

  classStyle: string;

  constructor() { 
    this.titleModel = '';
    this.contentModel = '';
    this.classStyle = '';

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

  displayAddNote() {
    this.classStyle = 'note-disply';
  }

}
