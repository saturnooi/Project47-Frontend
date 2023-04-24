
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueComponent implements OnInit {
  id?: number;
  firstName: string = '';
  lastName: string = '';
  startTime: string = '';
  endTime: string = '';
  selectedDate: string = '';
  symptom: string = '';
  dentists: any = [];
  dentistsId?: number;
  apiUrl?: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.apiUrl = environment.apiUrl
    this.http.get<any>(`${this.apiUrl}/dentist/simple`).subscribe({
      next: (data) => {
        this.dentists = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
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
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
