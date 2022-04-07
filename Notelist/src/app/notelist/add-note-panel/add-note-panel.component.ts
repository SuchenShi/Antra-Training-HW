import { Component, Input, Output, OnInit, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-note-panel',
  templateUrl: './add-note-panel.component.html',
  styleUrls: ['./add-note-panel.component.css']
})
export class AddNotePanelComponent implements OnInit {

  @Output() titleExisted = new EventEmitter<string>();

  @Input() titleBefore!: string;
  @Input() contentBefore!: string;

  title!: string;
  content!: string;

  titleChange: string = '';
  contentChange: string = '';

  lastTitle: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = this.titleBefore;
    this.content = this.contentBefore;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['titleBefore']) {
      this.title = changes['titleBefore'].currentValue;
    } else {
      this.title = this.lastTitle;
    }
    if (changes['contentBefore'])
      this.content = changes['contentBefore'].currentValue;
  }

  onClickSave() {
    this.titleExisted.emit(this.title);
    if (!localStorage.getItem(this.title) ||localStorage.getItem(this.title) !== this.content) {
      localStorage.setItem(`${this.title}`, this.content);
      this.lastTitle = this.title;
      this.title = '';
      this.content = '';
    }
  }
  
  onClickRevert() {
    this.content = localStorage.getItem(this.title) || '';
  }

}
