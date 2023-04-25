import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
interface DateObject {
  dateNumber: number;
  isCurrentMonth: boolean;
}
@Component({
  selector: 'app-dentist-working',
  templateUrl: './dentist-working.component.html',
  styleUrls: ['./dentist-working.component.css'],
})
export class DentistWorkingComponent {
  today = new Date();
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: any[] = [];
  apiUrl: string = '';

  isOpenAddWork: boolean = false;
  startTime: any = '21';
  endTime: any = '21';
  repetition = 'null';
  scheduleType = 'allDay';
  isModalOpen = true;
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
  dentists: any = [];

  selectedMonth: string = this.getMonthName(this.today.getMonth());
  selectedYear: number = 0;
  calendar: any[][] = [];

  years: number[] = [];
  ShowMonths: boolean = false;
  ShowYears: boolean = false;
  weekIndex: number = 0;
  dentitsWork: any = [];
  addStartTime = '';
  addEndTime = '';
  scheduleDate: string = '';
  dentistId?: number | null;
  constructor(private http: HttpClient, private datePipe: DatePipe) {
    this.apiUrl = environment.apiUrl;
    this.http.get<any>(`${this.apiUrl}/dentist/simple`).subscribe({
      next: (data) => {
        this.dentists = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit() {
    this.selectedMonth = this.getMonthName(this.today.getMonth());

    this.selectedYear = this.today.getFullYear();

    this.years = this.generateYears(this.today.getFullYear(), 3);
    this.generateCalendar();

    this.http
      .get<any>(
        `${this.apiUrl}/dentist-work/byMonth?month=${
          this.months.indexOf(this.selectedMonth) + 1
        }&year=${this.selectedYear}`
      )
      .subscribe({
        next: (data) => {
          this.dentitsWork = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
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
  nextWeek() {
    if (
      this.weekIndex < 8 &&
      this.countCurrentMonthDates(this.weeks[this.weekIndex + 1]) != 7
    )
      this.weekIndex++;
  }
  prevWeek() {
    if (
      this.weekIndex > 0 &&
      this.countCurrentMonthDates(this.weeks[this.weekIndex - 1]) != 7
    )
      this.weekIndex--;
  }

  countCurrentMonthDates(selectedDates: DateObject[]) {
    const count = selectedDates.filter(
      (obj) => obj.isCurrentMonth === false
    ).length;
    return count;
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

  openAddWork(date: string, id: number) {
    this.isOpenAddWork = true;
    this.scheduleDate = date;
    this.dentistId = id;
  }
  closeAddWork() {
    this.isOpenAddWork = false;
    this.repetition = 'null';
    this.scheduleType = 'allDay';
    this.addStartTime = '';
    this.addEndTime = '';
    this.scheduleDate = '';
    this.dentistId = null;
  }

  AddWork() {
    let playlodeWork;
    if (this.scheduleType == 'allDay') {
      playlodeWork = {
        dentist: this.dentistId,
        time_start: new Date(`${this.scheduleDate} 09:00`).toISOString(),
        time_end: new Date(`${this.scheduleDate} 20:00`).toISOString(),
        repeatType: this.repetition,
      };
    } else {
      playlodeWork = {
        dentist: this.dentistId,
        time_start: new Date(
          `${this.scheduleDate} ${this.addStartTime}`
        ).toISOString(),
        time_end: new Date(
          `${this.scheduleDate} ${this.addEndTime}`
        ).toISOString(),
        repeatType: this.repetition,
      };
    }
    console.log(playlodeWork);
    this.http.post(`${this.apiUrl}/dentist-work`, playlodeWork).subscribe({
      next: (data) => {
        console.log('Queue updated successfully!', data);
        // You can also redirect the user to another page or refresh the data
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.apiUrl = environment.apiUrl;
    this.http.get<any>(`${this.apiUrl}/dentist/simple`).subscribe({
      next: (data) => {
        this.dentists = data;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.closeAddWork();
  }

  showWorkTime(date: string, id: number) {
    const selected = new Date(date);
    const index = this.dentitsWork.findIndex((appointment: any) => {
      const dayDate = new Date(appointment.time_start);
      const selectedDate = new Date(selected);
      dayDate.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
      return (
        appointment.dentist.id === id &&
        dayDate.getTime() === selectedDate.getTime()
      );
    });
    if (index >= 0)
      return `${this.converseToTime(
        this.dentitsWork[index].time_start
      )} - ${this.converseToTime(this.dentitsWork[index].time_end)}`;
    return '';
  }
  converseToTime(date: string) {
    return this.datePipe.transform(date, 'HH:mm', '+0700');
  }
}
