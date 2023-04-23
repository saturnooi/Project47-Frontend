import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarWorkWeekComponent } from './calendar-work-week.component';

const routes: Routes = [{ path: '', component: CalendarWorkWeekComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarWorkWeekRoutingModule { }
