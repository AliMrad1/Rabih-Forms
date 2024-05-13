import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';

@Component({
  selector: 'app-buttons-cancel-next',
  templateUrl: './buttons-cancel-next.component.html',
  styleUrls: ['./buttons-cancel-next.component.css']
})
export class ButtonsCancelNextComponent {

  @Input() left_Button = "CANCEL";
  @Input() right_Button = "NEXT";

  subjectService = inject(SubjectsService)

  goToNextStep(){
    if(this.right_Button == "CREATE USER") {
      this.subjectService.goToNextStep(0);
    } else {
      this.subjectService.goToNextStep(1);
    }
  }

  goBackStep() {
    this.subjectService.goToNextStep(-1);
  }
}
