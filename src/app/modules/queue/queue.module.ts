import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { QueueComponent } from './queue.component';
import { QueueRoutingModule } from './queue-routing.module';
import { CalendarWorkComponent } from 'src/app/components/calendar-work/calendar-work.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QueueComponent, CalendarWorkComponent],
  imports: [CommonModule, QueueRoutingModule, FormsModule],
  providers: [DatePipe],
})
export class QueueModule {}
