import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { pushUpDown, fadeInOut } from '../animations/Animations';
import { ExistingUserInfo } from '../models/Classes';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  animations: [
    pushUpDown(),
    fadeInOut()
  ]
})
export class FormInputComponent {

  @Input() label:string = "";
  @Input() type:string = "";
  @Input() width:string = "";
  @Input() icon:string = "";
  @Input() formGroup!:FormGroup;

  @Output() onInputChange = new EventEmitter<FormGroup>();


  existingUsers:ExistingUserInfo[] = [
    new ExistingUserInfo("HXXXXXX", "ALI MRAD"),
    new ExistingUserInfo("AXXXXXX", "ZAHRAA YEHYA"),
    new ExistingUserInfo("CXXXXXX", "AMIR MRAD"),
    new ExistingUserInfo("TXXXXXX", "HOUSSEIN MRAD")
  ];

  showDropdown:boolean = false;
  selectedUser: ExistingUserInfo = new ExistingUserInfo("","");

  public onInputChangeEmit() {
    this.onInputChange.emit(this.formGroup);
  }

  selectUser(user: ExistingUserInfo) {
      this.selectedUser = user;
      alert(this.selectedUser)
      this.showDropdown = false;
  }
}


