import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLogged?: boolean;

  private router: Router = inject(Router);
  private _authServide: AuthService = inject(AuthService);

  constructor(){

  }

  ngOnInit(): void {
    this.isLogged = this._authServide.isLoggedInUser();
  }

  redirecToLogin(){
    this.router.navigate(['/login'])
  }
}
