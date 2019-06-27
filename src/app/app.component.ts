import { Component } from '@angular/core';

@Component({
  selector: 'appy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'etsolappy';
  show = true;

  constructor() {
  }

  access() {
    console.log('hice click en ingresar');
  }
}