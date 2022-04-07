import { Component, OnInit } from '@angular/core';
import { Quicknotes } from '../interface/quicknotes';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

  titles: string[] = [];
  title: string='';
  content!: string;

  constructor() {};

  ngOnInit(): void {
    for (let [key, value] of Object.entries(localStorage)){
      this.titles.push(key);
    }
  }

  onClickTitle(key: string) {
    this.title = key;
    this.content = localStorage.getItem(key) || '';
  }
  onClickDelete(title: string) {
    localStorage.removeItem(title);
    this.titles = this.titles.filter((item) => item !== title);
  }

  onClickAdd() {
    this.title = '';
    this.content = '';
  }
  getContent(title: string) {
    if (!this.titles.find((item) => item === title)) {
      this.titles.push(title);
    }
  }


}
