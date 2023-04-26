import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextAppointmentRoutingModule } from './next-appointment-routing.module';
import { NextAppointmentComponent } from './next-appointment.component';
import { FormsModule } from '@angular/forms';
import { CalendarWorkWeekModule } from 'src/app/components/calendar-work-week/calendar-work-week.module';


@NgModule({
  declarations: [
    NextAppointmentComponent
  ],
  imports: [
    CommonModule,
    NextAppointmentRoutingModule,
    FormsModule,
    CalendarWorkWeekModule,
  ]
})
export class NextAppointmentModule { }
