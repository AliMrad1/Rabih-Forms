import { Component, HostListener } from '@angular/core';
import { fadeInOut, fadeInOut_Modal } from '../animations/Animations';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css'],
  animations: [
    fadeInOut_Modal()
  ]
})
export class ModalPopupComponent {

  isSmallScreen = window.innerWidth < 1200;

  isModalVisible = false;

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth < 1200;
  }
  
}
