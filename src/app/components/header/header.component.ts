import { Component, OnDestroy, OnInit, Signal, computed, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private authService: AuthService = inject(AuthService);

  public userLoginOn: boolean | null = null;
  public userLogin: Signal<boolean> = computed(() => this.authService.isLogged())
  
  constructor(){}

  cerrarSesion(): void{
    this.authService.setLoggedInUser(false);
  }

}
