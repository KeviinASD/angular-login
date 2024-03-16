import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  private authService: AuthService = inject(AuthService);
  
  public user: User | null = null;

  constructor(){}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }
}
