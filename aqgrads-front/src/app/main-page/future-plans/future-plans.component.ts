import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-future-plans',
  templateUrl: './future-plans.component.html',
  styleUrl: './future-plans.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInWithDelay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 200ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  imports: [CommonModule, TranslateModule]
})
export class FuturePlansComponent implements OnInit, OnDestroy {
  constructor(private translate: TranslateService) { }

  projects: { title: string; subtitle: string; imagePath: string }[] = [];
  langChangeSub!: Subscription;

  ngOnInit(): void {
    this.loadProjects();

    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }

  loadProjects() {
    this.projects = [
      {
        title: this.translate.instant("Landing-Page.Projects.CARD_HEADER.ACTIVITY"),
        subtitle: this.translate.instant("Landing-Page.Projects.CARD_BODY.UI_UX_DESIGNER"),
        imagePath: "https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg"
      },
      {
        title: this.translate.instant("Landing-Page.Projects.CARD_HEADER.OLYMPIAD"),
        subtitle: this.translate.instant("Landing-Page.Projects.CARD_BODY.CEO_EXPERT"),
        imagePath: "https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg"
      },
      {
        title: this.translate.instant("Landing-Page.Projects.CARD_HEADER.DORMITORY"),
        subtitle: this.translate.instant("Landing-Page.Projects.CARD_BODY.WEB_DESIGNER"),
        imagePath: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg"
      },
      {
        title: this.translate.instant("Landing-Page.Projects.CARD_HEADER.SCHOOL"),
        subtitle: this.translate.instant("Landing-Page.Projects.CARD_BODY.MARKETING_COORDINATOR"),
        imagePath: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg"
      },
      {
        title: this.translate.instant("Landing-Page.Projects.CARD_HEADER.SPORTS"),
        subtitle: this.translate.instant("Landing-Page.Projects.CARD_BODY.OTHER"),
        imagePath: "/assets/img/sport.png"
      }
    ];
  }



  ngOnDestroy(): void {
    this.langChangeSub.unsubscribe()
  }
}
