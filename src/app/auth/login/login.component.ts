import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUserLogin, User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  errorResponse: string = '';

  constructor() {}

  login() {
    if (this.loginForm.valid) {
      const user: IUserLogin = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.authService.login(
        user,
        (user) => {
          this.router.navigateByUrl('/dashboard');
          this.loginForm.reset();
          console.log('Usuario logueado');
        },
        (error) => {
          this.errorResponse = error;
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  hasError(controlName: string, errorName: string) {
    return (
      this.loginForm.controls[controlName].hasError(errorName) &&
      this.loginForm.controls[controlName].touched
    );
  }
}
