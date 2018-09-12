import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers"
      >
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
      >
      </passenger-detail>
    
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];
  constructor(){}

  ngOnInit(){
    console.log('ngOnInit');
    this.passengers = [{
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
  }
}
