import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { AlertService } from 'src/app/services/alert/alert-service.service';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  selectedRole = 'staff';
  submitted = false;
  // private formBuilder: FormBuilder,
  // private route: ActivatedRoute,
  // private router: Router,
  // private authService: AuthService,
  // private alertService: AlertService
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      // password: ['', Validators.required, Validators.minLength(8)],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }
  logout() {
    this.authService.logout();
  }
  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    let _role: string = '';
    if (this.selectedRole === 'staff') _role = 'admin';
    else if (this.selectedRole === 'dentist') _role = 'dentist';
    this.authService
      .login(this.f['username'].value, this.f['password'].value, _role)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
