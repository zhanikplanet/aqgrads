import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price-list',
  imports: [CardModule, CommonModule, ButtonModule, DialogModule, FormsModule],
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.scss'
})
export class PriceListComponent {
  userData : any
  activeDialog: number | null = null;
  phoneNumber: string = '';
  items = [
    {
      imgSrc: '/assets/img/sarbaz.png',
      title: 'Сарбаз',
      subtitle: '990 тг / айына'
    },
    {
      imgSrc: '/assets/img/sarbaz.png',
      title: 'Жауынгер',
      subtitle: '1 990 тг / айына'
    },
    {
      imgSrc: '/assets/img/sarbaz.png',
      title: 'Батыр',
      subtitle: '4 990 тг / айына'
    },
    {
      imgSrc: '/assets/img/sarbaz.png',
      title: 'Қолбасшы',
      subtitle: '9990 тг / айына'
    },
    {
      imgSrc: '/assets/img/sarbaz.png',
      title: 'Хан',
      subtitle: '19 990 тг / айына'
    }
  ]
  constructor(){
    this.userData = {}
  }

  showDialog(index: number) {
    this.activeDialog = index;
    this.userData = {
      name: '',
      surname: '',
      graduatedYear: '',
      email: ''
    }
    this.phoneNumber = ''; 
  }

  resetForm() {
    this.userData = {
      name: '',
      surname: '',
      graduatedYear: '',
      email: ''
    };
    this.phoneNumber = ''; 
  }


  onDialogVisibilityChange(isVisible: boolean, index: number) {
    this.activeDialog = isVisible ? index : null;
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
