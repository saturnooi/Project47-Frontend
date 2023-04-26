import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistSchedulesComponent } from './dentist-schedules.component';

const routes: Routes = [{ path: '', component: DentistSchedulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistSchedulesRoutingModule { }
