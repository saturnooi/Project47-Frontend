import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-work',
  templateUrl: './calendar-work.component.html',
  styleUrls: ['./calendar-work.component.css']
})
export class CalendarWorkComponent {
  today = new Date();
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: any[] = [];
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  selectedMonth: string = this.getMonthName(this.today.getMonth());
  selectedYear: number = 0;
  calendar: any[][] = [];

  years: number[] = [];
  ShowMonths: boolean = false;
  ShowYears: boolean = false;

  constructor() { }

  ngOnInit() {
    this.selectedMonth = this.getMonthName(this.today.getMonth());

    console.log(this.getMonthName(this.today.getMonth()));
    this.selectedYear = this.today.getFullYear();

    this.years = this.generateYears(this.today.getFullYear(), 3);
    this.generateCalendar();
  }

  selectMonth(month: string) {
    this.selectedMonth = month;

    this.ShowMonths = !this.ShowMonths;
    this.generateCalendar();
  }

  selectYear(year: number) {
    this.selectedYear = year;
    this.ShowYears = !this.ShowYears;
    this.generateCalendar();
  }

  private getMonthName(monthIndex: number): string {
    console.log(this.months, this.months[monthIndex]);
    return this.months[monthIndex];
  }

  private generateYears(currentYear: number, range: number): number[] {
    const years = [];
    for (let i = -range; i <= range; i++) {
      years.push(currentYear + i);
    }
    return years;
  }

  toggleYear() {
    this.ShowYears = !this.ShowYears;
  }

  toggleMonth() {
    this.ShowMonths = !this.ShowMonths;
  }

  generateCalendar() {
    const monthIndex = this.months.indexOf(this.selectedMonth);
    const firstDayOfMonth = new Date(this.selectedYear, monthIndex, 1).getDay();
    const daysInMonth = new Date(
      this.selectedYear,
      monthIndex + 1,
      0
    ).getDate();
    const daysInPrevMonth = new Date(
      this.selectedYear,
      monthIndex,
      0
    ).getDate();

    const weeks = [];
    let currentWeek = [];

    // Add empty cells for days from the previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      currentWeek.push({
        dateNumber: daysInPrevMonth - i,
        isCurrentMonth: false,
      });
    }

    // Add cells for days in the current month
    for (let i = 1; i <= daysInMonth; i++) {
      currentWeek.push({ dateNumber: i, isCurrentMonth: true });
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Add empty cells for days from the next month
    let nextMonthDay = 1;
    while (currentWeek.length < 7) {
      currentWeek.push({ dateNumber: nextMonthDay, isCurrentMonth: false });
      nextMonthDay++;
    }
    weeks.push(currentWeek);

    this.weeks = weeks;
  }
}