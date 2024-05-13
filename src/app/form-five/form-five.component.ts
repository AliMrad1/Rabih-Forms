import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-five',
  templateUrl: './form-five.component.html',
  styleUrls: ['./form-five.component.css']
})
export class FormFiveComponent {

  @Input() left_Button = "CANCEL";
  @Input() right_Button = "NEXT";
}
