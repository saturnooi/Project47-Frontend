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
import { PersonalInformationComponent } from './modules/personal-information/personal-information.component';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },

      {
        path: 'service',
        loadChildren: () =>
          import('./modules/service/service.module').then(
            (m) => m.ServiceModule
          ),
      },
      {
        path: 'review',
        loadChildren: () =>
          import('./modules/review/review.module').then((m) => m.ReviewModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./modules/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'blog/:id',
        loadChildren: () =>
          import('./modules/post/post.module').then((m) => m.PostModule),
      },
      {
        path: 'dentists',
        loadChildren: () =>
          import('./modules/dentists/dentists.module').then(
            (m) => m.DentistsModule
          ),
      },
      {
        path: 'staff',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./modules/home/home.module').then((m) => m.HomeModule),
          },
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
            path: 'edit-queue/:id',
            loadChildren: () =>
              import('./modules/edit-queue/edit-queue.module').then(
                (m) => m.EditQueueModule
              ),
          },
          {
            path: 'dentist-working',
            component: DentistWorkingComponent,
            loadChildren: () =>
              import('./modules/dentist-working/dentist-working.module').then(
                (m) => m.DentistWorkingModule
              ),
          },
          {
            path: 'personal-information',
            component: PersonalInformationComponent,
            loadChildren: () =>
              import(
                './modules/personal-information/personal-information.module'
              ).then((m) => m.PersonalInformationModule),
          },
          {
            path: 'calendar-work-week',
            loadChildren: () =>
              import(
                './components/calendar-work-week/calendar-work-week.module'
              ).then((m) => m.CalendarWorkWeekModule),
          },

          {
            path: 'profile',
            loadChildren: () =>
              import('./modules/staff-profile/staff-profile.module').then(
                (m) => m.StaffProfileModule
              ),
          },
        ],
      },
    ],
  },

  {
    path: 'login',
    component: AuthLayoutComponent,

    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '403',
    component: ForbiddenComponent,
  },

  {
    path: 'calendar-work-week',
    loadChildren: () =>
      import('./components/calendar-work-week/calendar-work-week.module').then(
        (m) => m.CalendarWorkWeekModule
      ),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
