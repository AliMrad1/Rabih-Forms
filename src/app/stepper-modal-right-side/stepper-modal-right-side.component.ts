import { CdkStepper } from '@angular/cdk/stepper';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper-modal-right-side',
  templateUrl: './stepper-modal-right-side.component.html',
  styleUrls: ['./stepper-modal-right-side.component.css'],
  providers:[{provide:CdkStepper,useExisting:StepperModalRightSideComponent}]

})
export class StepperModalRightSideComponent extends CdkStepper implements OnInit,OnDestroy{

  @Input() linearModeSelected = true;
  @Input() index:number = 0;

  subjectService = inject(SubjectsService)
  private subscription!: Subscription;

  stepperSubLabels:string[] = [
    "Identification", "Preferences", "Rights", "Desks", "KPIS"
  ]

  ngOnInit(): void {
    this.subscription = this.subjectService.recieveNextStep().subscribe({
      next: (nextStep:any) => {
        this.index = this.index + nextStep;
        this.selectedIndex = this.index;
      },
      error: (err) => {
       
      },
      complete: () => {

      }
    })
  }

  override ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onClick(index:number) {
    this.selectedIndex = index;
  }

}
