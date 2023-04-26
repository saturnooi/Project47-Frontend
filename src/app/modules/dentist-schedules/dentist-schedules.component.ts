import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { interval } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-dentist-schedules',
  templateUrl: './dentist-schedules.component.html',
  styleUrls: ['./dentist-schedules.component.css'],
})
export class DentistSchedulesComponent {
  waitConfirm: number = 0;
  apiUrl?: string;
  isOpenCancel: boolean = false;
  idDelete?: number | null;
  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;

  isLoading: boolean = false;

  dentistId?: number;
  patientId?: number;
  date?: Date;
  postId?: number;

  sortBy: string = '';
  search: string = '';
  data: any = [];
  selectedDisplay: string = 'Day';
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  selectedMonth: number;
  selectedYear: number;
  calendarDays: any[] = [];

  
  
  // selectType: string = 'select' ;

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
  selectedDate: Date = new Date();
  constructor(private http: HttpClient, private datePipe: DatePipe,  authService: AuthService ) {
    this.apiUrl = environment.apiUrl;
    const today = new Date();

    this.selectedMonth = today.getMonth();
    this.selectedYear = today.getFullYear();
    this.generateCalendar();

    this.getData();
    this.selectDate(today);

    this.dentistId= authService.getUserid(); 
  }

  detail: string = '';
  advise: string = '';
  isOpenAdvice: boolean = false;

  async generateCalendar() {
    const daysInMonth = new Date(
      this.selectedYear,
      this.selectedMonth + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      this.selectedYear,
      this.selectedMonth,
      1
    ).getDay();
    const daysInLastMonth = new Date(
      this.selectedYear,
      this.selectedMonth,
      0
    ).getDate();
    const calendarDays = [];

    // Add days from last month to fill in the beginning of the calendar
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const dayOfMonth = daysInLastMonth - i;
      const date = new Date(
        this.selectedYear,
        this.selectedMonth - 1,
        dayOfMonth
      );
      calendarDays.push({ date, isCurrentMonth: false });
    }

    // Add days for the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.selectedYear, this.selectedMonth, i);
      calendarDays.push({ date, isCurrentMonth: true });
    }

    // Add days from next month to fill in the end of the calendar
    const lastDayOfMonth = new Date(
      this.selectedYear,
      this.selectedMonth,
      daysInMonth
    ).getDay();
    for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
      const date = new Date(this.selectedYear, this.selectedMonth + 1, i);
      calendarDays.push({ date, isCurrentMonth: false });
    }

    this.calendarDays = calendarDays;
  }

  async selectDate(date: Date) {
    this.selectedDate = date;
    console.log('selectedDate', this.selectedDate);
    await this.getData();
    this.calendarDays.forEach((day) => {
      day.isSelected = false;
    });

    const selectedDayIndex = this.calendarDays.findIndex((day) => {
      const dayDate = new Date(day.date);
      const selectedDate = new Date(date);
      dayDate.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
      return dayDate.getTime() === selectedDate.getTime();
    });

    // selectedDay.isSelected = true;
    console.log(date, selectedDayIndex, this.calendarDays[selectedDayIndex]);
    this.calendarDays[selectedDayIndex].isSelected = true;
    console.log(this.calendarDays);
  }

  goToPrevMonth() {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.generateCalendar();
  }

  goToNextMonth() {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.generateCalendar();
  }

  async getData() {
    let url = '';
    if (this.selectedDisplay === 'Day')
      url = `${this.apiUrl}/queue/bydate/dentist?date=${
        this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd') || ''
      }&page=${this.currentPage}&limit=${this.itemsPerPage}&dentistId=${this.dentistId}`;
    else if (this.selectedDisplay === 'All')
      url = `${this.apiUrl}/queue?page=${this.currentPage}&limit=${this.itemsPerPage}`;
    else if (this.selectedDisplay === 'Wait')
      url = `${this.apiUrl}/queue/awaitingclinicalconfirmation?page=${this.currentPage}&limit=${this.itemsPerPage}`;

    if (this.sortBy) {
      if (this.sortBy === 'patient' || this.sortBy === 'dentist')
        url += `&sortBy=first_name&sortType=${this.sortBy}`;
      else url += `&sortBy=${this.sortBy}`;
    }
    if (this.search) url += `&search=${this.search}`;
    this.isLoading = true;
    this.http.get(url).subscribe({
      next: (data: any) => {
        console.error(data);
        this.totalItems = data.total;
        this.data = data.results;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  converseToTime(date: string) {
    return this.datePipe.transform(date, 'HH:mm', '+0700');
  }

  selectedDisplayAll() {
    this.selectedDisplay = 'All';
    this.getData();
  }
  selectedDisplayDay() {
    this.selectedDisplay = 'Day';
    this.getData();
  }
  selectedDisplayWait() {
    this.selectedDisplay = 'Wait';
    this.getData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getData();
  }

  converseToDate(date: string) {
    const originalDate = new Date(date);

    // Get the day, month, and year values from the Date object
    const day = originalDate.getDate();
    const monthIndex = originalDate.getMonth();
    const year = 2023;

    const monthName = this.months[monthIndex];

    // Create a new Date object with the converted date string
    const convertedDate = new Date(`${monthName} ${day}, ${year}`);

    return convertedDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  OpenCancel(id: number) {
    this.idDelete = id;
    this.isOpenCancel = true;
  }
  closeCancel() {
    this.idDelete = null;
    this.isOpenCancel = false;
  }

  appointmentCancel() {
    if (this.idDelete) {
      this.isLoading = true;
      const url = `${this.apiUrl}/queue/${this.idDelete}`;
      this.http.patch(url, { status: 'ยกเลิก' }).subscribe({
        next: (data: any) => {
          console.log(data);
          this.getData();
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error(error);
          this.isLoading = false;
        },
      });
    }
    this.isOpenCancel = false;
  }

  getCountWati() {
    const url = `${this.apiUrl}/queue/awaiting-confirmation-count`;

    this.http.get(url).subscribe({
      next: (data: any) => {
        this.waitConfirm = data;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  OpenAdvice(dentistId: number, patientId: number, date: Date, postId: number) {
    this.isOpenAdvice = true;
    this.dentistId = dentistId;
    this.patientId = patientId;
    this.date = date;
    this.postId = postId;
  }

  closeAdvice() {
    this.isOpenAdvice = false;
    this.detail = '';
    this.advise = '';
  }

  confirmAdvice() {
    const playlode = {
      "date_appoint": this.date,
      "dentist": this.dentistId,
      "patient": this.patientId,
      "detail": this.detail,
      "advise": this.advise,
      "confirm_review": 0
    };

    console.log(playlode);
    this.http.post(`${this.apiUrl}/history-appointment`, playlode).subscribe({
      next: (data: any) => {
        this.isLoading = false;
        const url = `${this.apiUrl}/queue/${this.postId}`;
        this.isLoading = true;
        this.http.patch(url, { status: 'นัดหมายเสร็จสิ้น' }).subscribe({
          next: (data: any) => {
            console.log(data);
            this.getData();
            this.isLoading = false;
          },
          error: (error: any) => {
            console.error(error);
            this.isLoading = false;
          },
        });
      },
      error: (error: any) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }
}
