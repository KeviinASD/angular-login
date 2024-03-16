import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { IUserLogin, User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginService: LoginService = inject(LoginService);

  public isLogged: WritableSignal<boolean> = signal<boolean>(false);
  private currentUser: User | null = null;

  constructor() { }

  login(user: IUserLogin, correct: (User: User) => void, _error: (error: string) => void ): void{
    this.loginService.login(user).subscribe({
      next: (user: User) => {
        this.currentUser = user;
        this.isLogged.set(true);
        correct(user);
      },
      error: (error: HttpErrorResponse) => {
        _error(error.message);
      },
      complete: () => {
        console.log("completado ");
      }
    });
  }

  setLoggedInUser(status: boolean): void {
    this.isLogged.set(status);  
  }

  isLoggedInUser(): boolean {
    return this.isLogged();
  }

  logout(): void {
    this.isLogged.set(false);
    this.currentUser = null;
  }

  getCurrentUser(): User | null{
    return this.currentUser;
  }

}

