import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { AuthLayoutComponent } from './views/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './views/user-layout/user-layout.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
