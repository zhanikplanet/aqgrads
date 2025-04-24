import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  imports:[CommonModule],
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
export class JumbotronComponent implements OnInit {
  stats = [
    { label: 'Founded', value: '1995' },
    { label: 'Alumni', value: '15,000+' },
    { label: 'Current Students', value: '2,500+' },
    { label: 'Events Held', value: '1,200+' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
