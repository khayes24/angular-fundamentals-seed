import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{title}}
    </div>
  `
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;  
  constructor(){
    this.title = 'Ultimate Angular';
  }

}
