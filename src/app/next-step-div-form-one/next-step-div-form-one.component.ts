import { Component } from '@angular/core';

@Component({
  selector: 'app-next-step-div-form-one',
  templateUrl: './next-step-div-form-one.component.html',
  styleUrls: ['./next-step-div-form-one.component.css']
})
export class NextStepDivFormOneComponent {

  isSwitchedToTrue = false;

  onSwitchClicked($event: any | null) {
    if ($event.target.checked) {
      this.isSwitchedToTrue = true;
    } else {
      this.isSwitchedToTrue = false;

    }
 
  }

}
