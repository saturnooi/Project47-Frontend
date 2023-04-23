import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedRoles = (route.data as { roles: string[] })['roles'];

    // Get the current user from the authentication service
    const currentUser = this.authService.getUserRole();

    // Check if the user has the required role
    if (currentUser && allowedRoles.includes(currentUser)) {
      // User has the required role, allow access to the route
      return true;
    }

    this.router.navigate(['/403']);
    return false;
  }
}
