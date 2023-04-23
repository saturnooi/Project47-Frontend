import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EditQueueRoutingModule } from './edit-queue-routing.module';
import { EditQueueComponent } from './edit-queue.component';
import { CalendarWorkWeekModule } from 'src/app/components/calendar-work-week/calendar-work-week.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditQueueComponent],
  imports: [
    CommonModule,
    EditQueueRoutingModule,
    CalendarWorkWeekModule,
    FormsModule,
  ],
  providers: [
    DatePipe
  ],
})
export class EditQueueModule {}
