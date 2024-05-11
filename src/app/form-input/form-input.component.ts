import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {

  @Input() label:string = "";
  @Input() type:string = "";
  @Input() width:string = "";
  @Input() formGroup!:FormGroup;

  @Output() onInputChange = new EventEmitter<FormGroup>();

  public onInputChangeEmit() {
    this.onInputChange.emit(this.formGroup);
  }
}
