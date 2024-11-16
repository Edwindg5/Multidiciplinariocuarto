import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const { username, password } = this.formData;
    this.authService.login(username, password).subscribe(
      (response: any) => {
        if (response.access_token) {
          this.authService.saveToken(response.access_token);
          alert('Inicio de sesión exitoso');
          this.router.navigate(['/home']); // Redirige al home
        } else {
          alert('Error al iniciar sesión');
        }
      },
      (error) => {
        console.error('Error durante el inicio de sesión:', error);
        alert('Credenciales incorrectas o error del servidor');
      }
    );
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']); // Ruta hacia el registro
  }
}
