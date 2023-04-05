import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const authModule = () => import('./_views/auth/auth.module').then(x => x.AuthModule)
const userModule = () => import('./_views/user/user.module').then(x => x.UserModule)

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'auth', loadChildren: authModule },
  { path: 'user', loadChildren: userModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
