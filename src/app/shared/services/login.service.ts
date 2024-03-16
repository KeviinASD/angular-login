import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUserLogin, User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  login(user: IUserLogin): Observable<User> {
    return this.http.get<User>('./././assets/data.json');
  }

}
