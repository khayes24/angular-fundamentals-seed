import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger} from '../../models/passenger.interface'

@Component({
  selector: 'passenger-detail',
  template:  `
  <div>
    <span
      class="status"
      [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
        type="text"
        [value]="detail.fullname"
        (input)="onNameChange(name.value)"
        #name>
      </div>
      <div *ngIf="!editing">
        {{detail.fullname}}
      </div>
      <p>{{passenger | json}}</p><!--Json Pipe converts object to json-->
      <div class="date">
        Check in: {{ detail.checkInDate }}
      </div>
      <div class="children">
        Children : {{detail.children?.length || 0}} <!--Safe navigation checks ifp roperty exists if not it will move on to next item and prevent error -->
      </div>
      <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})

export class PassengerDetailComponent{
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  //@Outputis called from angular core
  //Output and Event Emitter are used for getting data out of component
  @Output()
  //Event Emitter can be different types
  //Allows us to fire a custom event
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor(){}
  //Change function that runs whenever input changes
  onNameChange(value: string){
    this.detail.fullname = value;
  }

  //Toggle the edit value
  toggleEdit(){
  //Communicate cahnges to parent component
  if(this.editing){
    this.edit.emit(this.detail);
  }
  this.editing = !this.editing;
}

  //Remove Passenger
  onRemove(){
  //Emit the entire detail
    this.remove.emit(this.detail);
  }

}
