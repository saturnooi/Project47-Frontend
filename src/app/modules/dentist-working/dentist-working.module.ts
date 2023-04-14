import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistWorkingRoutingModule } from './dentist-working-routing.module';
import { DentistWorkingComponent } from './dentist-working.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DentistWorkingComponent],
  imports: [CommonModule, DentistWorkingRoutingModule, FormsModule],
})
export class DentistWorkingModule {}
