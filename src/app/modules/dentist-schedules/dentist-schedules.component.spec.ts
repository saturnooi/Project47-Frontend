import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistSchedulesComponent } from './dentist-schedules.component';

describe('DentistSchedulesComponent', () => {
  let component: DentistSchedulesComponent;
  let fixture: ComponentFixture<DentistSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentistSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
