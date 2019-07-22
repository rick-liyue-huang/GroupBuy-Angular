
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string,
  link?: string
}

interface AddFunc {
  (x: number, y: number): number
}

interface Dict {
  [key: string]: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  ngOnInit() {
  }

  title = 'GroupBuy-Angular';
  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter()
  selectedIndex = -1;
  constructor() {
    console.log(this.dict['a']);
  }
  add: AddFunc = (x, y) => x + y;
  dict: Dict = {
    a: '6',
    b: '66'
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    // send the event to its parent
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
