import { Component } from '@angular/core';
import { User } from '@app/_models/user';
import { AuthService } from './_services/user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user?: User | null;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe(x => this.user = x)
  }

  logout() {
    this.authService.logout()
  }
}
