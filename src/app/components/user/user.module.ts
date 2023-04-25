import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { AccessoriesComponent } from './accessories/accessories.component';
import { AccessoriesDetailsComponent } from './accessories-details/accessories-details.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { SchedulesComponent } from './schedules/schedules.component';

import { QuillModule } from 'ngx-quill';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    QuillModule.forRoot(),
    PaginationModule,
    FormsModule
  ],
  declarations: [
    AccessoriesComponent,
    AccessoriesDetailsComponent,
    CreateNewsComponent,
    SchedulesComponent,
   
  ],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {}
