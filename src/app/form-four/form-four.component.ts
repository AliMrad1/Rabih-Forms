import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styleUrls: ['./form-four.component.css']
})
export class FormFourComponent {

  @Input() left_Button = "CANCEL";
  @Input() right_Button = "NEXT";
}
