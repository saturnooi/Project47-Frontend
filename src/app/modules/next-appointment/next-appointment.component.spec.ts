import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextAppointmentComponent } from './next-appointment.component';

describe('NextAppointmentComponent', () => {
  let component: NextAppointmentComponent;
  let fixture: ComponentFixture<NextAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
