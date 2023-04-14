import { RouterModule, Routes } from '@angular/router';

import { AccessoriesDetailsComponent } from './accessories-details/accessories-details.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SchedulesComponent } from './schedules/schedules.component';
import { UserLayoutComponent } from 'src/app/views/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserRoutingModule {}
