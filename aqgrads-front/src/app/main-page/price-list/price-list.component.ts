import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import {DialogModule} from 'primeng/dialog'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
  imports:[CardModule,DialogModule,CommonModule]
})
export class PriceListComponent {
  dialogVisible = false;
  selectedPlan: any = null;

  subscriptions = [
    {
      name: 'Basic Plan',
      price: '1993тг',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=500',
      features: ['Access to basic courses', 'Library resources', 'Online support'],
    },
    {
      name: 'Standard Plan',
      price: '4990тг',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500',
      features: ['All Basic features', 'Premium courses', '1-on-1 tutoring'],
    },
    {
      name: 'Premium Plan',
      price: '10990тг',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500',
      features: ['All Standard features', 'Career counseling', 'Certificate program'],
    },
    {
      name: 'Premium Plan',
      price: '15990тг',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500',
      features: ['All Standard features', 'Career counseling', 'Certificate program'],
    },
    {
      name: 'Premium Plan',
      price: '20990тг',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500',
      features: ['All Standard features', 'Career counseling', 'Certificate program'],
    },
    {
      name: 'Premium Plan',
      price: '24990тг',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500',
      features: ['All Standard features', 'Career counseling', 'Certificate program'],
    },
  ];

  openDialog(index: number) {
    this.selectedPlan = this.subscriptions[index];
    this.dialogVisible = true;
  }

  // onSubmit(){
  //   this.
  // }
}
