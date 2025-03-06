import { Component } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToAboutUs() {
    this.scrollService.scrollTo('about-us-section');
  }
  scrollToPriceList() {
    this.scrollService.scrollTo('price-list-section');
  }
  scrollToFuturePlans() {
    this.scrollService.scrollTo('future-plans-section');
  }
  scrollToContactUs() {
    this.scrollService.scrollTo('contact-us-section');
  }
}
