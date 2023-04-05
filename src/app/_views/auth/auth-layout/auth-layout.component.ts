import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/_services/user/user-service.service';

@Component({
  templateUrl: 'auth-layout.component.html',
})
export class AuthLayoutComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }
}
