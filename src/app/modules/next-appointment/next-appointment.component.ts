import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-next-appointment',
  templateUrl: './next-appointment.component.html',
  styleUrls: ['./next-appointment.component.css'],
})
export class NextAppointmentComponent {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id: any = 0;
  firstName: string = '';
  lastName: string = '';
  startTime: string = '';
  endTime: string = '';
  selectedDate: string = '';
  symptom: string = '';
  dentists: any = [];
  dentistsId?: number;
  idParam: any;
  apiUrl?: string;



  ngOnInit(): void {
    this.apiUrl = environment.apiUrl
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`${this.apiUrl}/dentist/simple`).subscribe({
      next: (data) => {
        this.dentists = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.getUser()
  }
  getUser() {
    this.http.get<any>(`${this.apiUrl}/patient/${this.id}`).subscribe({
      next: (data) => {
        console.log(data);
        this.firstName = data.first_name;
        this.lastName = data.last_name;
      },
      error: (error) => {
        console.log(`${this.apiUrl}/patient/${this.id}`);
        console.log(error);
      },
    });
  }

  uploadQueue(): void {
    let playlodeQueue;
    if (!this.dentistsId) {
      playlodeQueue = {
        patient: this.id,
        time_start: new Date(
          `${this.selectedDate} ${this.startTime}`
        ).toISOString(),
        time_end: new Date(
          `${this.selectedDate} ${this.endTime}`
        ).toISOString(),
        symtom: this.symptom,
        status: 'รอการยืนยันจากคนไข้',
      };
    } else {
      playlodeQueue = {
        patient: this.id,
        dentist: this.dentistsId,
        time_start: new Date(
          `${this.selectedDate} ${this.startTime}`
        ).toISOString(),
        time_end: new Date(
          `${this.selectedDate} ${this.endTime}`
        ).toISOString(),
        symtom: this.symptom,
        status: 'รอการยืนยันจากคนไข้',
      };
    }

    this.http.post(`${this.apiUrl}/queue/`, playlodeQueue).subscribe({
      next: (data) => {
        
        console.log('Queue updated successfully!', data);
        // You can also redirect the user to another page or refresh the data
        this.router.navigate(['/staff/schedules']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
