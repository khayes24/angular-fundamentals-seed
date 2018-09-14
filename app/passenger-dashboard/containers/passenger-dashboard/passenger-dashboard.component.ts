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
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
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

  handleEdit(event: Passenger){
    // Check if passenger id passed from component does not equal the id here
    this.passengers = this.passengers.map((passenger: Passenger)=>{
      if(passenger.id === event.id){
        //Detect if we are in current pasenger and fires event to merge changes to object
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.log(this.passengers);
  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger)=>{
      return passenger.id !== event.id;
    });
  }

}
