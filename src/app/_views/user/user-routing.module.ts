import { RouterModule, Routes } from "@angular/router";
import { UserLayoutComponent } from "./user-layout/user-layout.component";
import { AccessoriesDetailsComponent } from "./accessories-details/accessories-details.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { CreateNewsComponent } from "./create-news/create-news.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SchedulesComponent } from "./schedules/schedules.component";

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'accessories-details', component: AccessoriesDetailsComponent },
      { path: 'accessories', component: AccessoriesComponent },
      { path: 'home', component: SchedulesComponent },
      { path: 'create-news', component: CreateNewsComponent },
      { path: 'schedules', component: SchedulesComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserRoutingModule { }
