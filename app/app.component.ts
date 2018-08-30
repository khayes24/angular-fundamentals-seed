import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number,//? means optional part of interface
  children?: Child[]

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
        <p>{{passenger | json}}</p><!--Json Pipe converts object to json-->
        <div class="date">
          Check in: {{ passenger.checkInDate }}
        </div>
        <div class="children">
          Children : {{passenger.children?.length || 0}} <!--Safe navigation checks ifp roperty exists if not it will move on to next item and prevent error -->
        </div>
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
    checkInDate: 7181995,
    children: [{name: 'Yoboi', age:12}, {name: 'Chloe', age:4}]
    },
    {
    id: 2,
    fullname: 'Kam2',
    checkedIn: false,
    checkInDate: 201823,
    children: null
  }];

  constructor(){
    this.title = 'Airline Passengers';
  }

}
