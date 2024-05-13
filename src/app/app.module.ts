import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  ModalPopupComponent } from './modal-popup/modal-popup.component';
import { ModalLeftSideComponent } from './modal-left-side/modal-left-side.component';
import { ModalRightSideComponent } from './modal-right-side/modal-right-side.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { StepperModalRightSideComponent } from './stepper-modal-right-side/stepper-modal-right-side.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormFourComponent } from './form-four/form-four.component';
import { FormFiveComponent } from './form-five/form-five.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ButtonsCancelNextComponent } from './buttons-cancel-next/buttons-cancel-next.component';
import { NextStepDivFormOneComponent } from './next-step-div-form-one/next-step-div-form-one.component';
import { FormTitleComponent } from './form-title/form-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPopupComponent,
    ModalLeftSideComponent,
    ModalRightSideComponent,
    StepperModalRightSideComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent,
    FormFourComponent,
    FormFiveComponent,
    FormInputComponent,
    ButtonsCancelNextComponent,
    NextStepDivFormOneComponent,
    FormTitleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CdkStepperModule
  ],
  exports:[CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
