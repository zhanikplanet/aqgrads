import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { error } from 'console';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {}
  phoneNumber: string = '';
  isEditing: boolean = false;
  showMoreFields: boolean = false;
  showLessFields: boolean = true;

  constructor(private userService:UserService){
  }

  ngOnInit(){
    this.fetchUserProfile()
  }

  fetchUserProfile(){
    this.userService.getUserProfile().subscribe(
      (data)=> {
        this.user = data;
        this.phoneNumber = this.formatPhoneNumberOnInit(this.user.phoneNumber);
      },
      (error) => {
        console.error("Error fetching user data:", error)
      }
    )
  }

  toggleMoreFields(): void {
    this.showMoreFields = !this.showMoreFields;
  }
  toggleLessFields(): void {
    this.showMoreFields = !this.showMoreFields;
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  formatPhoneNumberOnInit(phone: string): string {
    let input = phone.replace(/\D/g, '');
    if (input.startsWith('7')) {
      return `+7 (${input.slice(1, 4)}) ${input.slice(4, 7)}-${input.slice(7, 9)}-${input.slice(9, 11)}`;
    } else if (input.startsWith('8')) {
      return `8 (${input.slice(1, 4)}) ${input.slice(4, 7)}-${input.slice(7, 9)}-${input.slice(9, 11)}`;
    }
    return phone;
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

  SaveProfile(){
    this.userService.updateUserProfile(this.user).subscribe(
      (updateUser) => {
        console.log('User profile updated:', updateUser)
        this.user = updateUser
        this.toggleEditMode()
      },
      (error) => {
        console.error('Error during updating profile:', error)
      }
    )

  }


}
