import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWorkWeekComponent } from './calendar-work-week.component';

describe('CalendarWorkWeekComponent', () => {
  let component: CalendarWorkWeekComponent;
  let fixture: ComponentFixture<CalendarWorkWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarWorkWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarWorkWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
