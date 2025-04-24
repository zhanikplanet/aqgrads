import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { title } from 'node:process';
import { subtle } from 'node:crypto';

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
  imports:[CommonModule]
})
export class FuturePlansComponent implements OnInit {
  projects = [
    {
      title: "Активность",
      subtitle: "UI & UX Designer",
      imagePath: "https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Олимпиада",
      subtitle: "CEO Expert",
      imagePath: "https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Общяга",
      subtitle: "Web Designer",
      imagePath: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Школа",
      subtitle: "Marketing Coordinator",
      imagePath: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Спорт",
      subtitle: "",
      imagePath: "/assets/img/sport.png"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
