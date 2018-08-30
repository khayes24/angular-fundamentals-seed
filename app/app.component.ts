import { Component } from '@angular/core';

interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number

}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>{{title}}</h3>
      <ul>
      <li *ngFor="let passenger of passengers; let i =index;">
      <span
        class="status"
        [class.checked-in]="passenger.checkedIn"></span>
        {{i}}: {{passenger.fullname}}
        <p>{{passenger | json}}</p><!--Json Pipe-->
      </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  title: string;
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Kam',
    checkedIn: true,
    checkInDate: 7181995
    },
    {
    id: 2,
    fullname: 'Kam2',
    checkedIn: false,
    checkInDate: 201823
  }];

  constructor(){
    this.title = 'Airline Passengers';
  }

}
