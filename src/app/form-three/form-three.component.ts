import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.css']
})
export class FormThreeComponent {
  @Input() left_Button = "PREVIOUS";
  @Input() right_Button = "NEXT";
}
