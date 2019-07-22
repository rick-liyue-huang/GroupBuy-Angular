import { Component } from '@angular/core';

interface TopMenu {
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroupBuy-Angular';
  menus: TopMenu[] = [
    {
      title: 'Hot',
      link: ''
    },
    {
      title: 'Male',
      link: ''
    },
    {
      title: 'Mobile',
      link: ''
    },
    {
      title: 'Hot',
      link: ''
    },
    {
      title: 'Male',
      link: ''
    },
    {
      title: 'Mobile',
      link: ''
    },
    {
      title: 'Hot',
      link: ''
    },
    {
      title: 'Male',
      link: ''
    },
    {
      title: 'Mobile',
      link: ''
    }
  ];
  selectedIndex = -1;
  constructor() {
    console.log(this.dict['a']);
  }
  add: AddFunc = (x, y) => x + y;
  dict: Dict = {
    a: '6',
    b: '66'
  }
}
