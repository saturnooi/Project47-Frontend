import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue.component';
import { QueueRoutingModule } from './queue-routing.module';
import { CalendarWorkComponent } from 'src/app/components/calendar-work/calendar-work.component';





@NgModule({
  declarations: [
    QueueComponent,
    CalendarWorkComponent,
  ],
  imports: [
    CommonModule,
    QueueRoutingModule
  ]
})
export class QueueModule {
  constructor() {
  
  }
 }
