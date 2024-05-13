import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepDivFormOneComponent } from './next-step-div-form-one.component';

describe('NextStepDivFormOneComponent', () => {
  let component: NextStepDivFormOneComponent;
  let fixture: ComponentFixture<NextStepDivFormOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextStepDivFormOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextStepDivFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
