import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLeftSideComponent } from './modal-left-side.component';

describe('ModalLeftSideComponent', () => {
  let component: ModalLeftSideComponent;
  let fixture: ComponentFixture<ModalLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLeftSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
