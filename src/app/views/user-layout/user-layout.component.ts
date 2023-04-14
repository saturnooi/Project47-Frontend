import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
})
export class UserLayoutComponent {
  constructor(
    private router: Router,
    // private authService: AuthService
  ) {
    // redirect to home if already logged in
    // if (this.authService.userValue) {
    //   this.router.navigate(['/']);
    // }
  }
}
