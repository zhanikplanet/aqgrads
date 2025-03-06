import { Component, OnInit } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { ScrollService } from '../shared/scroll.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  visible2: boolean = false;

  constructor(private scrollService: ScrollService, private router: Router) { }

  ngOnInit() {
    this.scrollService.scroll$.subscribe((section) => {
      if (section === 'about-us-section') {
        this.scrollToAboutUs();
      }
      else if (section === 'price-list-section') {
        this.scrollToPriceList()
      }
      else if (section === 'future-plans-section') {
        this.scrollToFuturePlans()
      }
      else if (section === 'contact-us-section') {
        this.scrollToContactUs()
      }
    });
  }

  closeMenuAfterScroll() {
    setTimeout(() => {
      this.visible2 = false;
    }, 300);
  }

  scrollToAboutUs() {
    if (this.router.url === '/') {
      document.getElementById('about-us-section')?.scrollIntoView({ behavior: 'smooth' });
      this.closeMenuAfterScroll();
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById('about-us-section')?.scrollIntoView({ behavior: 'smooth' });
          this.closeMenuAfterScroll();
        }, 500)
      })
    }
  }
  scrollToPriceList() {
    if (this.router.url === '/') {
      document.getElementById('price-list-section')?.scrollIntoView({ behavior: 'smooth' });
      this.closeMenuAfterScroll();
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById('price-list-section')?.scrollIntoView({ behavior: 'smooth' });
          this.closeMenuAfterScroll();
        }, 500)
      })
    }
  }
  scrollToFuturePlans() {
    if (this.router.url === '/') {
      document.getElementById('future-plans-section')?.scrollIntoView({ behavior: 'smooth' });
      this.closeMenuAfterScroll();
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById('future-plans-section')?.scrollIntoView({ behavior: 'smooth' });
          this.closeMenuAfterScroll();
        }, 500)
      })
    }
  }
  scrollToContactUs() {
    if (this.router.url === '/') {
      document.getElementById('contact-us-section')?.scrollIntoView({ behavior: 'smooth' });
      this.closeMenuAfterScroll();
    }
    else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() =>{
          document.getElementById('contact-us-section')?.scrollIntoView({ behavior: 'smooth' });
          this.closeMenuAfterScroll();
        },500)
      })
    }
  }
}
