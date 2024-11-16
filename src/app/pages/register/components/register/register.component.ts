import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../auth/auth.service';
import {FormsModule } from '@angular/forms'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    rol: 'USER' // Rol predeterminado
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegisterClick(): void {
    const { username, email, password, confirmPassword, telefono, rol } = this.formData;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const userData = {
      nombre: username,
      correo_electronico: email,
      contrasena: password,
      telefono: telefono,
      rol: rol
    };

    this.authService.register(userData).subscribe(
      (response) => {
        alert('Registro exitoso');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert(error.error?.detail || 'Error al registrar usuario');
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
