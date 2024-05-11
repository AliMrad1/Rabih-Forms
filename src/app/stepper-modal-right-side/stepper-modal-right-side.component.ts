import { CdkStepper, StepperOrientation } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-stepper-modal-right-side',
  templateUrl: './stepper-modal-right-side.component.html',
  styleUrls: ['./stepper-modal-right-side.component.css'],
  providers:[{provide:CdkStepper,useExisting:StepperModalRightSideComponent}]

})
export class StepperModalRightSideComponent extends CdkStepper {

  @Input() linearModeSelected = true;

  stepperSubLabels:string[] = [
    "Identification", "Preferences", "Rights", "Desks", "KPIS"
  ]

  onClick(index:number){
    this.selectedIndex = index;
  }

}
