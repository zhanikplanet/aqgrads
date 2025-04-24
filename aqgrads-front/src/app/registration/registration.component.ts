import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule], // ✅ Added ReactiveFormsModule
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  phoneNumber: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      graduatedYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  formatPhoneNumber(event: any) {
    let input = event.target.value.replace(/\D/g, ''); 
  
    if (event.inputType === 'deleteContentBackward') {
      this.phoneNumber = input; 
      return;
    }
  
    if (input.startsWith('7')) {
      input = '+7' + input.slice(1);
    } else if (input.startsWith('8')) {
      input = '8' + input.slice(1);
    }
  
    let formatted = '';
  
    if (input.startsWith('+7')) {
      formatted = `+7 (${input.slice(2, 5)}) ${input.slice(5, 8)}-${input.slice(8, 10)}-${input.slice(10, 12)}`;
    } else if (input.startsWith('8')) {
      formatted = `8 (${input.slice(1, 4)}) ${input.slice(4, 7)}-${input.slice(7, 9)}-${input.slice(9, 11)}`;
    }
  
    event.target.value = formatted.trim();
    this.phoneNumber = formatted;
  }
  
  
  validateNumber(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];

    if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.toastr.error("Please fill all required fields correctly.");
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.toastr.success("Registration successful! Please log in.");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toastr.error("Registration failed. Try again.");
        console.error(err);
      }
    });
  }
}
