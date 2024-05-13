import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent {

  @Input() left_Button = "PREVIOUS";
  @Input() right_Button = "NEXT";
}
