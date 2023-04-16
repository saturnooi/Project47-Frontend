import { Component, Input } from '@angular/core';
import { defaultNav, staffNav } from './_nav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedin: boolean = true; ;
  isDentist: boolean = false;
  isStaff: boolean = true;
  navbar: any;

  constructor() {
    if (!this.isLoggedin) {
      this.navbar = defaultNav;
    } else if (this.isLoggedin && this.isStaff) {
      this.navbar = staffNav;
    }
  }

  // constructor(private authService: AuthService) {
  //   this.authService.authStatus.subscribe((value) => {
  //     this.isLoggedin = value;
  //     this.isDentist = this.authService.getUserRole() === 'dentist';
  //     this.isStaff = this.authService.getUserRole() === 'staff';
  //   });
  // }

  // public logout(): void {
  //   this.authService.logout();
  // }
}
