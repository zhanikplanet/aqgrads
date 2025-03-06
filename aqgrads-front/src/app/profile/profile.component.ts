import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  phoneNumber: string = '';
  isEditing: boolean = false;
  showMoreFields: boolean = false;
  showLessFields: boolean = true;

  toggleMoreFields(): void {
    this.showMoreFields = !this.showMoreFields;
  }
  toggleLessFields(): void {
    this.showMoreFields = !this.showMoreFields;
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }
  formatPhoneNumber(event: any) {
    let input = event.target.value.replace(/\D/g, '');

    if (input.startsWith('7')) {
      input = '+7' + input.slice(1);
    } else if (input.startsWith('8')) {
      input = '8' + input.slice(1);
    }

    let formatted = '';

    if (input.startsWith('+7')) {
      formatted = `+7 (${input.slice(2, 5)}) ${input.slice(5, 8)}-${input.slice(8, 12)}`;
    } else if (input.startsWith('8')) {
      formatted = `8 (${input.slice(1, 4)}) ${input.slice(4, 7)}-${input.slice(7, 11)}`;
    }

    this.phoneNumber = formatted.trim();
  }
  validateNumber(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];

    if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
