import { Component } from '@angular/core';
import { ISchedule } from 'src/app/models/user/schedule';
// import { ISchedule } from '@app/_models/user/schedule';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
})
export class SchedulesComponent {
  waitConfirm = 5;
  schedules: ISchedule[] = [
    {
      name: 'ณัฐวัฒน์ จันทร์วิสิทธิ์',
      illness: 'เปลี่ยนเหล็กดัดฟัน',
      dentist: 'ทพญ.รุ่งเรือง เหมาะธุลิน',
      time: '18:00',
      status: 'ได้รับคำยืนยันจากคนไข้',
    },
    {
      name: 'ณัฐวัฒน์ จันทร์วิสิทธิ์',
      illness: 'เปลี่ยนเหล็กดัดฟัน',
      dentist: 'ทพญ.รุ่งเรือง เหมาะธุลิน',
      time: '18:00',
      status: 'ได้รับคำยืนยันจากคนไข้',
    },
    {
      name: 'ณัฐวัฒน์ จันทร์วิสิทธิ์',
      illness: 'เปลี่ยนเหล็กดัดฟัน',
      dentist: 'ทพญ.รุ่งเรือง เหมาะธุลิน',
      time: '18:00',
      status: 'ได้รับคำยืนยันจากคนไข้',
    },
    {
      name: 'ณัฐวัฒน์ จันทร์วิสิทธิ์',
      illness: 'เปลี่ยนเหล็กดัดฟัน',
      dentist: 'ทพญ.รุ่งเรือง เหมาะธุลิน',
      time: '18:00',
      status: 'ได้รับคำยืนยันจากคนไข้',
    },
    {
      name: 'ณัฐวัฒน์ จันทร์วิสิทธิ์',
      illness: 'เปลี่ยนเหล็กดัดฟัน',
      dentist: 'ทพญ.รุ่งเรือง เหมาะธุลิน',
      time: '18:00',
      status: 'ได้รับคำยืนยันจากคนไข้',
    },
    {
      name: 'ณัฐวัฒน์ จันทร์วิสิทธิ์',
      illness: 'เปลี่ยนเหล็กดัดฟัน',
      dentist: 'ทพญ.รุ่งเรือง เหมาะธุลิน',
      time: '18:00',
      status: 'ได้รับคำยืนยันจากคนไข้',
    },
  ];

  data:any = []

  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  selectedMonth: number;
  selectedYear: number;
  calendarDays: any[] = [];
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
  selectedDate: any;
  constructor(private http: HttpClient,private datePipe: DatePipe) {
    const today = new Date();
    this.selectedMonth = today.getMonth();
    this.selectedYear = today.getFullYear();
    this.generateCalendar();
    
  }

  generateCalendar() {
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
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(`${month}/${day}/${year}`);
    await this.getData(`${year}-${month}-${day}`) 
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

  async getData(date: string) {
    const url = `http://localhost:3000/queue/bydate?date=${date}`;

    this.http.get(url).subscribe({
      next: (data: Object) => {
        console.log(data);
        this.data = data;
      },
      error: (error: any) => {
        console.error(error);
      }}
      
    );
  }

  converseToTime(date:string) {
    return this.datePipe.transform(date, 'HH:mm')
  }
  
}
