import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService{
  constructor() {}

  getPassengers(): Passenger[]{
    return [{
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
