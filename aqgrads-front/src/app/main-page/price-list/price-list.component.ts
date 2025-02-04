import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-price-list',
  imports: [CardModule,CommonModule,ButtonModule],
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.scss'
})
export class PriceListComponent {
  items=[
    {
      imgSrc:'/assets/img/sarbaz.png',
      title:'Сарбаз',
      subtitle:'990 тг / айына'
    },
    {
      imgSrc:'/assets/img/sarbaz.png',
      title:'Жауынгер',
      subtitle:'1 990 тг / айына'
    },
    {
      imgSrc:'/assets/img/sarbaz.png',
      title:'Батыр',
      subtitle:'4 990 тг / айына'
    },
    {
      imgSrc:'/assets/img/sarbaz.png',
      title:'Қолбасшы',
      subtitle:'9990 тг / айына'
    },
    {
      imgSrc:'/assets/img/sarbaz.png',
      title:'Хан',
      subtitle:'19 990 тг / айына'
    }
  ]
}
