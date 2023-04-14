import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './views/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './views/user-layout/user-layout.component';
import { AccessoriesDetailsComponent } from './components/user/accessories-details/accessories-details.component';
import { AccessoriesComponent } from './components/user/accessories/accessories.component';
import { SchedulesComponent } from './components/user/schedules/schedules.component';
import { CreateNewsComponent } from './components/user/create-news/create-news.component';
import { CalendarWorkComponent } from './components/calendar-work/calendar-work.component';
import { QueueComponent } from './modules/queue/queue.component';
import { QueueModule } from './modules/queue/queue.module';
import { DentistWorkingModule } from './modules/dentist-working/dentist-working.module';
import { DentistWorkingComponent } from './modules/dentist-working/dentist-working.component';

// import { UserLayoutComponent } from './components/user-layout/user-layout.component';
// import { AccessoriesDetailsComponent } from './components/accessories-details/accessories-details.component';
// import { AccessoriesComponent } from './components/user/accessories/accessories.component';
// import { SchedulesComponent } from './components/user/schedules/schedules.component';
// import { CreateNewsComponent } from './components/create-news/create-news.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    // loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./components/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: 'staff',
    component: UserLayoutComponent,
    children: [
      {
        path: 'accessories-details',
        component: AccessoriesDetailsComponent,
        loadChildren: () =>
          import('./components/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'accessories',
        component: AccessoriesComponent,
        loadChildren: () =>
          import('./components/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'create-news',
        component: CreateNewsComponent,
        loadChildren: () =>
          import('./components/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'schedules',
        component: SchedulesComponent,
        loadChildren: () =>
          import('./components/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'queue',
        component: QueueComponent,
        loadChildren: () =>
          import('./modules/queue/queue.module').then((m) => m.QueueModule),
      },
      {
        path: 'dentist-working',
        component: DentistWorkingComponent,
        loadChildren: () =>
          import('./modules/dentist-working/dentist-working.module').then(
            (m) => m.DentistWorkingModule
          ),
      },
      // { path: 'accessories', component: AccessoriesComponent },
      // { path: 'home', component: SchedulesComponent },
      // { path: 'create-news', component: CreateNewsComponent },
      // { path: 'schedules', component: SchedulesComponent },
    ],
  },
  {
    path: 'review',
    component: UserLayoutComponent,
    loadChildren: () =>
      import('./modules/review/review.module').then((m) => m.ReviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {
    console.log('Routing');
  }
}
