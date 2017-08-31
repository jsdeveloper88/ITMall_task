import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/weather"> Weather </a>
    <router-outlet></router-outlet>
  `,
  styles: [`
  a {
      background-color: rgb(15, 190, 124);
      color: white;
      display: inline-block;
      padding: 12px;
      text-decoration: none;
      margin: 5px 0;
      cursor: pointer;
      border-radius: 5px;
  }
  `],
})
export class AppComponent {}
