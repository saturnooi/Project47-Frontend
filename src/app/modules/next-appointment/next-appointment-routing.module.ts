import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextAppointmentComponent } from './next-appointment.component';

const routes: Routes = [{ path: '', component: NextAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NextAppointmentRoutingModule { }
