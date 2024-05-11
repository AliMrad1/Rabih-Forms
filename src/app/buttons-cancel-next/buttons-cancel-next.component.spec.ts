import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCancelNextComponent } from './buttons-cancel-next.component';

describe('ButtonsCancelNextComponent', () => {
  let component: ButtonsCancelNextComponent;
  let fixture: ComponentFixture<ButtonsCancelNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsCancelNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsCancelNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
