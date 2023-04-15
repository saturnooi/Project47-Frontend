import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInformationRoutingModule } from './personal-information-routing.module';
import { PersonalInformationComponent } from './personal-information.component';
import { DentistInformationComponent } from 'src/app/components/dentist-information/dentist-information.component';

@NgModule({
  declarations: [PersonalInformationComponent, DentistInformationComponent],
  imports: [CommonModule, PersonalInformationRoutingModule],
})
export class PersonalInformationModule {}
