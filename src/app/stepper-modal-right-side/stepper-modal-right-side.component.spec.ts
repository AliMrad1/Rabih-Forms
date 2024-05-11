import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperModalRightSideComponent } from './stepper-modal-right-side.component';

describe('StepperModalRightSideComponent', () => {
  let component: StepperModalRightSideComponent;
  let fixture: ComponentFixture<StepperModalRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperModalRightSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperModalRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
