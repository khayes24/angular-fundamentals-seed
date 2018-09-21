
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//Import throw and catch modules
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';
//Good practice to use @Injectable even if nothing is being injected
//Allows us to use dependecy injection in other classes
@Injectable()
export class PassengerDashboardService{
  constructor(private http: Http) {}
/*
What is an observable?
An Observable is like a Stream (in many languages) and allows to pass zero or
more events where the callback is called for each event.

Observable provides operators like map, forEach, reduce,... similar to an array

*/
  getPassengers(): Observable<Passenger[]>{
    return this.http
    .get(PASSENGER_API)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()));
  }

  getPassenger(id: number): Observable<Passenger>{
    return this.http
    .get(`${PASSENGER_API}/${id}`)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http
    .put(`${PASSENGER_API}/${passenger.id}`, passenger)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()));
  }

  removePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http
    .delete(`${PASSENGER_API}/${passenger.id}`)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()));
  }
}
