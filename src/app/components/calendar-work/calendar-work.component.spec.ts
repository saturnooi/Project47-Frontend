import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWorkComponent } from './calendar-work.component';

describe('CalendarWorkComponent', () => {
  let component: CalendarWorkComponent;
  let fixture: ComponentFixture<CalendarWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
