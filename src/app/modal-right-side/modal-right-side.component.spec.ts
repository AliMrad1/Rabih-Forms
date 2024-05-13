import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRightSideComponent } from './modal-right-side.component';

describe('ModalRightSideComponent', () => {
  let component: ModalRightSideComponent;
  let fixture: ComponentFixture<ModalRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRightSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
