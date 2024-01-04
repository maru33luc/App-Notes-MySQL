import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service'; // Importa AuthService

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn: boolean = this.authService.isLoggedIn();
  userName: string | null = this.authService.getUserName();

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
    // Actualiza el estado del usuario después de cerrar sesión
    this.isLoggedIn = false;
    this.userName = '';
  }
}