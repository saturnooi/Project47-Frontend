import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    FormsModule
  ]
})
export class ServiceModule { }
