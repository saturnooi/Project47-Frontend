import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-queue',
  templateUrl: './edit-queue.component.html',
  styleUrls: ['./edit-queue.component.css'],
})
export class EditQueueComponent implements OnInit {
  constructor(private http: HttpClient, private datePipe: DatePipe, private router: Router ,private route: ActivatedRoute,) {}

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  startTime: string = '';
  endTime: string = '';
  selectedDate: string = '';
  symptom: string = '';
  dentists: any = [];
  dentistsId?: number;  
  idParam: any;
  ngOnInit(): void {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.getQueueData();

    this.http.get<any>(`http://localhost:3000/dentist/simple`).subscribe({
      next: (data) => {
        this.dentists = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  logData() {
    console.log(this.selectedDate, this.startTime);
  }

  getQueueData(): void {
 
    this.http.get<any>(`http://localhost:3000/queue/${this.idParam}`).subscribe({
      next: (data) => {
        this.id = data.id;
        this.firstName = data.patient.first_name;
        this.lastName = data.patient.last_name;

        this.startTime =
          this.datePipe.transform(data.time_start, 'HH:mm') || '';

        this.endTime = this.datePipe.transform(data.time_end, 'HH:mm') || '';
        this.selectedDate =
          this.datePipe.transform(data.time_start, 'yyyy-MM-dd') || '';
        this.symptom = data.symtom;

        console.log(this.startTime, this.endTime);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  updateQueue(): void {
   
    const updatedQueue = {
      dentist:this.dentistsId,
      time_start: new Date(`${this.selectedDate} ${this.startTime}`).toISOString(),
      time_end: new Date(`${this.selectedDate} ${this.endTime}`).toISOString(),
      symtom: this.symptom,
      status: "รอการยืนยันจากคนไข้"
    };
    console.log(this.dentistsId)
    this.http.patch(`http://localhost:3000/queue/${this.idParam}`, updatedQueue).subscribe({
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
