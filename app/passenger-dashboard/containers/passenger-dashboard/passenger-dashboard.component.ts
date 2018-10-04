import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

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
        (view)="handleView($event)"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>

    </div>
  `
})

export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];
  //Using private allows us to inject service dependecy
  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
  ){}

  ngOnInit(){
    console.log('ngOnInit');
    this.passengerService
    .getPassengers()
    .subscribe((data:Passenger[]) => this.passengers = data);
  }

  handleEdit(event: Passenger){
    this.passengerService
    .updatePassenger(event)
    .subscribe((data: Passenger) => {
      // Check if passenger id passed from component does not equal the id here
      this.passengers = this.passengers.map((passenger: Passenger)=>{
        if(passenger.id === event.id){
          //Detect if we are in current pasenger and fires event to merge changes to object
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    });
    console.log(this.passengers);
  }

  handleRemove(event: Passenger){
    this.passengerService
    .removePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger)=>{
        return passenger.id !== event.id;
      });
    });
  }

  handleView(event: Passenger) {
    //Dynamic imperative routing
    this.router.navigate(['/passengers', event.id]);
  }

}
