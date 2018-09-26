import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{detail | json}}
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname">
          <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
            Passenger name is required
          </div>
      </div>

      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id">
          <div *ngIf="id.errors?.required && id.touched" class="error">
            Passenger Id is required
          </div>
      </div>
      <div>Valid: {{ form.valid | json }}</div>
      <div>Invalid: {{ form.invalid | json }}</div>
      <div>
        <label>
          <input
            type="radio"
            [value]="true"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
            Yes
        </label>

        <label>
          <input
            type="radio"
            [value]="false"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
            No
        </label>

        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">

        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in Date
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate">
      </div>

      <div>
        Luggage
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [ngValue]="item.key">
            {{ item.value }}
          </option>
        </select>
      </div>
      {{ form.value | json }}
    </form>
  `
})

export class PassengerFormComponent {

  @Input()
  detail: Passenger;

  baggage:Baggage[] = [{
    key: 'none',
    value: 'no baggage'
  },
  {
    key: 'hand-only',
    value: 'Hand baggage'
  },
  {
    key: 'hold-only',
    value: 'hold baggage'
  },
  {
    key: 'hold-hand',
    value: 'hold & hand baggage'
  }];

  toggleCheckIn(checkedIn: boolean){
    if(checkedIn){
      this.detail.checkInDate = Date.now();
    }
  }

  constructor() {}
}
