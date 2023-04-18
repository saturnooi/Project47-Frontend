import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffProfileRoutingModule } from './staff-profile-routing.module';
import { StaffProfileComponent } from './staff-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StaffProfileComponent],
  imports: [
    CommonModule,
    StaffProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StaffProfileModule {}
