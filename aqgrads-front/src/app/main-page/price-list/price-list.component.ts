import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog'
import { CommonModule } from '@angular/common';
import { SubscribeService } from '../../../service/subscribe.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
  imports: [CardModule, DialogModule, CommonModule, FormsModule, TranslateModule]
})
export class PriceListComponent {

  constructor(private subscribeService: SubscribeService, private translate: TranslateService) { }
  subscriptions: { key: string; nameKey: string; price: string; image: string; features: string[] }[] = [];
  langChangeSub!: Subscription;

  dialogVisible = false;
  selectedPlan: any = null;

  userData = {
    name: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
    this.loadSubscriptions();

    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.loadSubscriptions();
    });
  }

  loadSubscriptions() {
    this.subscriptions = [
      {
        key: 'BASIC',
        nameKey: this.translate.instant('Landing-Page.Plans.CARD_HEADER.BASIC'),
        price: this.translate.instant('Landing-Page.Plans.CARD_PRICE.BASIC'),
        image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=500',
        features: [
          'Landing-Page.Plans.CARD_BODY.BASIC_1',
          'Landing-Page.Plans.CARD_BODY.BASIC_2',
          'Landing-Page.Plans.CARD_BODY.BASIC_3'
        ]
      },
      {
        key: 'STANDARD',
        nameKey: this.translate.instant('Landing-Page.Plans.CARD_HEADER.STANDARD'),
        price: this.translate.instant('Landing-Page.Plans.CARD_PRICE.STANDARD'),
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500',
        features: [
          'Landing-Page.Plans.CARD_BODY.STANDARD_1',
          'Landing-Page.Plans.CARD_BODY.STANDARD_2',
          'Landing-Page.Plans.CARD_BODY.STANDARD_3'
        ]
      },
      {
        key: 'PREMIUM',
        nameKey: this.translate.instant('Landing-Page.Plans.CARD_HEADER.PREMIUM'),
        price: this.translate.instant('Landing-Page.Plans.CARD_PRICE.PREMIUM'),
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500',
        features: [
          'Landing-Page.Plans.CARD_BODY.PREMIUM_1',
          'Landing-Page.Plans.CARD_BODY.PREMIUM_2',
          'Landing-Page.Plans.CARD_BODY.PREMIUM_3'
        ]
      }
    ];
  }

  openDialog(index: number) {
    this.selectedPlan = this.subscriptions[index];
    console.log(this.selectedPlan)
    this.dialogVisible = true;
  }

  onSubscribe() {
    if (!this.selectedPlan) return;

    // map frontend data → backend model
    const payload = {
      fullName: this.userData.name,
      email: this.userData.email,
      phoneNumber: this.userData.phone,
      planId: this.getPlanId(this.selectedPlan.key) // convert plan to enum/int
    };

    this.subscribeService.completeSubscription(payload).subscribe({
      next: (res) => {
        console.log('Subscribed successfully:', res);
        this.dialogVisible = false;
        this.userData = { name: '', email: '', phone: '' }; // reset form
      },
      error: (err) => {
        console.error('Subscription failed:', err);
      }
    });
  }

  getPlanId(planKey: string): number {
    switch (planKey) {
      case 'BASIC':
        return 1; 
      case 'STANDARD':
        return 2;
      case 'PREMIUM':
        return 3;
      default:
        return 0;
    }
  }
}

