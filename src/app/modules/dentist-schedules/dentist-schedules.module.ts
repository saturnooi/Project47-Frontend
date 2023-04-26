import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistSchedulesRoutingModule } from './dentist-schedules-routing.module';
import { DentistSchedulesComponent } from './dentist-schedules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { PaginationModule } from '../pagination/pagination.module';
import { UserRoutingModule } from 'src/app/components/user/user-routing.module';


@NgModule({
  declarations: [
    DentistSchedulesComponent
  ],
  imports: [
    CommonModule,
    DentistSchedulesRoutingModule,
    ReactiveFormsModule,
    UserRoutingModule,
    QuillModule.forRoot(),
    PaginationModule,
    FormsModule
  ]
})
export class DentistSchedulesModule { }
