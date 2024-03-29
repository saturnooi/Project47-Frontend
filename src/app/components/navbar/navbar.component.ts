import { Component, Input } from '@angular/core';
import { defaultNav, dentistNav, staffNav } from './_nav';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Router } from '@angular/router';
import { dentistDetail } from 'src/app/constants/defaultValue';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedin: boolean = true;
  isDentist: boolean = false;
  isStaff: boolean = false;
  navbar: any;

  // constructor() {
  //   if (!this.isLoggedin) {
  //     this.navbar = defaultNav;
  //   } else if (this.isLoggedin && this.isStaff) {
  //     this.navbar = staffNav;
  //   }
  // }

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus.subscribe((value) => {
      this.isLoggedin = value;
      console.log(this.isDentist);
      this.isDentist = this.authService.getUserRole() === 'dentist';
      this.isStaff = this.authService.isStaff();
    });
    if (!this.isLoggedin) {
      this.navbar = defaultNav;
    } else if (this.isLoggedin && this.isStaff) {
      this.navbar = staffNav;
    }
    else {
      this.navbar = dentistNav;
    }
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
