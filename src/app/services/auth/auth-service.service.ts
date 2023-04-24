import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Admin } from 'src/app/models/user/user';
import { Router } from '@angular/router';

interface UserLogin {
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Replace with your API URL
  authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());
  private userLogin: Admin | null = null;

  constructor(private http: HttpClient, private router: Router) {
    console.log(this.apiUrl);
  }

  public login(username: string, password: string, role: string) {
    // const apiUrl = `${this.apiUrl}/auth/login/${role}`;
    const apiUrl = `${this.apiUrl}auth/${role}/login`;

    return this.http
      .post<Admin>(apiUrl, {
        username: username,
        password: password,
      })
      .pipe(
        switchMap((res: any) => {
          const token = res.access_token;
          localStorage.setItem('token', token);
          return this.http.get<Admin>(
            `${this.apiUrl}/${role}/profile/${username}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        }),
        tap((user) => {
          this.userLogin = user;
          localStorage.setItem('user', JSON.stringify(user));
          this.authStatus.next(true);
        })
      );
  }

  public logout() {
    this.userLogin = null;
    this.authStatus.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  public getUserRole(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user ? user.role : '';
  }
  public isStaff(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const role = user ? user.role : '';
    return role === 'superadmin' || role === 'admin';
  }
  public getAuthStatus() {
    return this.authStatus.asObservable();
  }
}
