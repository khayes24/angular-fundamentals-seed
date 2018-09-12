import { Component, Input } from '@angular/core';
import { Passenger} from '../../models/passenger.interface'

@Component({
  selector: 'passenger-detail',
  template:  `
    <div>
    <span
      class="status"
      [class.checked-in]="detail.checkedIn"></span>
      {{detail.fullname}}
      <p>{{passenger | json}}</p><!--Json Pipe converts object to json-->
      <div class="date">
        Check in: {{ detail.checkInDate }}
      </div>
      <div class="children">
        Children : {{detail.children?.length || 0}} <!--Safe navigation checks ifp roperty exists if not it will move on to next item and prevent error -->
      </div>
    </div>
  `
})

export class PassengerDetailComponent{
  @Input()
  detail: Passenger;
  constructor(){

  }

}
