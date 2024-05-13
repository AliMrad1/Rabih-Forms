import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent {

  @Input() left_Button = "CANCEL";
  @Input() right_Button = "NEXT";
}
