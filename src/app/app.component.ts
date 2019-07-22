import { Component } from '@angular/core';
import { TopMenu } from './components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMenus: TopMenu[] = [
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

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }
}
