import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistWorkingComponent } from './dentist-working.component';

const routes: Routes = [{ path: '', component: DentistWorkingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistWorkingRoutingModule { }
