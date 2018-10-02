import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
//Services
import { PassengerDashboardService } from '../../passenger-dashboard.service';

//Interfaces
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template:`

    <div>
    <passenger-form
      [detail]="passenger"
      (update)="onUpdatePassenger($event)">
    </passenger-form>
    </div>

  `
})

export class PassengerViewerComponent implements OnInit{
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ){}
  ngOnInit(){
    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id)) //RXJS operator
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger){
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) =>{
        this.passenger = Object.assign({}, this.passenger, event);
      })
  }
}
