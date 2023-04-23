import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarWorkWeekRoutingModule } from './calendar-work-week-routing.module';
import { CalendarWorkWeekComponent } from './calendar-work-week.component';

@NgModule({
  declarations: [CalendarWorkWeekComponent],
  imports: [CommonModule, CalendarWorkWeekRoutingModule],
  exports: [CalendarWorkWeekComponent],
})
export class CalendarWorkWeekModule {}
