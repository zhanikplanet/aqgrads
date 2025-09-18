import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  imports:[CommonModule,TranslateModule],
  styleUrls: ['./jumbotron.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('statStagger', [
      transition(':enter', [
        query('.stat', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class JumbotronComponent implements OnInit,OnDestroy {
stats: { labelKey: string; value: string }[] = [];
  langChangeSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadStats();

    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.loadStats();
    });
  }

  loadStats(): void {
    this.stats = [
      { labelKey: this.translate.instant('Landing-Page.Jumbotron.FOOTER.FOUNDED'), value: '1995' },
      { labelKey: this.translate.instant('Landing-Page.Jumbotron.FOOTER.ALUMNI'), value: '15,000+' },
      { labelKey: this.translate.instant('Landing-Page.Jumbotron.FOOTER.CURRENT_STUDENTS'), value: '2,500+' },
      { labelKey: this.translate.instant('Landing-Page.Jumbotron.FOOTER.EVENTS_HELD'), value: '1,200+' }
    ];
  }

  ngOnDestroy(): void {
    this.langChangeSub.unsubscribe();
  }
}
