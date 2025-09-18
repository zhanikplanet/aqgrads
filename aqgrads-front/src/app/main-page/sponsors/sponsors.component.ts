import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
  imports: [CommonModule, TranslateModule]
})
export class SponsorsComponent implements OnInit, OnDestroy {
  langChangeSub!: Subscription
  sponsors: { name: string; logo: string; contribution: string; description: string; website: string }[] = [];
  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.loadPartners();

    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.loadPartners();
    });
  }
  loadPartners() {
    this.sponsors = [
      {
        name: this.translate.instant('Landing-Page.Partners.CARD_HEADER.TECHCORP'),
        logo: 'https://via.placeholder.com/150x80/2563eb/ffffff?text=TechCorp',
        contribution: this.translate.instant('Landing-Page.Partners.CARD_SUBHEADER.TECHCORP'),
        description: this.translate.instant('Landing-Page.Partners.CARD_BODY.TECHCORP'),
        website: 'https://techcorp.example.com'
      },
      {
        name: this.translate.instant('Landing-Page.Partners.CARD_HEADER.EDUTECH'),
        logo: 'https://via.placeholder.com/150x80/7c3aed/ffffff?text=EduTech',
        contribution: this.translate.instant('Landing-Page.Partners.CARD_SUBHEADER.EDUTECH'),
        description: this.translate.instant('Landing-Page.Partners.CARD_BODY.EDUTECH'),
        website: 'https://edutech.example.com'
      },
      {
        name: this.translate.instant('Landing-Page.Partners.CARD_HEADER.FUTURE_LABS'),
        logo: 'https://via.placeholder.com/150x80/e11d48/ffffff?text=FutureLabs',
        contribution: this.translate.instant('Landing-Page.Partners.CARD_SUBHEADER.FUTURE_LABS'),
        description: this.translate.instant('Landing-Page.Partners.CARD_BODY.FUTURE_LABS'),
        website: 'https://futurelabs.example.com'
      },
      {
        name: this.translate.instant('Landing-Page.Partners.CARD_HEADER.INNOVATION_INC'),
        logo: 'https://via.placeholder.com/150x80/0891b2/ffffff?text=Innovation',
        contribution: this.translate.instant('Landing-Page.Partners.CARD_SUBHEADER.INNOVATION_INC'),
        description: this.translate.instant('Landing-Page.Partners.CARD_BODY.INNOVATION_INC'),
        website: 'https://innovation.example.com'
      },
      {
        name: this.translate.instant('Landing-Page.Partners.CARD_HEADER.GLOBAL_ED'),
        logo: 'https://via.placeholder.com/150x80/ca8a04/ffffff?text=GlobalEd',
        contribution: this.translate.instant('Landing-Page.Partners.CARD_SUBHEADER.GLOBAL_ED'),
        description: this.translate.instant('Landing-Page.Partners.CARD_BODY.GLOBAL_ED'),
        website: 'https://globaled.example.com'
      },
      {
        name: this.translate.instant('Landing-Page.Partners.CARD_HEADER.LEARN_CO'),
        logo: 'https://via.placeholder.com/150x80/4d7c0f/ffffff?text=LearnCo',
        contribution: this.translate.instant('Landing-Page.Partners.CARD_SUBHEADER.LEARN_CO'),
        description: this.translate.instant('Landing-Page.Partners.CARD_BODY.LEARN_CO'),
        website: 'https://learnco.example.com'
      }
    ];
  }
  
  ngOnDestroy(): void {
   this.langChangeSub.unsubscribe()
  }
}
