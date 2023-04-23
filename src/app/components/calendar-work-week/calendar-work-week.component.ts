import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-work-week',
  templateUrl: './calendar-work-week.component.html',
  styleUrls: ['./calendar-work-week.component.css'],
})
export class CalendarWorkWeekComponent {
  startDate = new Date('2023-04-24'); // Replace with selected date
  weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  times = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];

  onCellClick(day: string, time: string) {
    const dateTime = new Date(this.startDate);
    dateTime.setDate(dateTime.getDate() + this.weekDays.indexOf(day));
    const [hours, minutes] = time.split(':');
    dateTime.setHours(parseInt(hours));
    dateTime.setMinutes(parseInt(minutes));
    console.log('Selected date and time:', dateTime.toISOString());
  }
}
