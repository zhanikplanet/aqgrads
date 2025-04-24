import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  errorMessage = ''

  constructor(private toastr: ToastrService, private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login({ email: this.user.email, password: this.user.password }).subscribe({
      next: () => {
        this.router.navigate(['profile']);
      },
      error: () => {
        this.errorMessage = 'Invalid email or password';
        this.toastr.error("Login failed. Please check your credentials.");
      }
    });
  }
}
