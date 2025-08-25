import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { ScrollService } from '../shared/scroll.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DrawerModule, ButtonModule, RouterModule, CommonModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  menu: boolean = false;
  isAuthentificated: boolean = false;
  activeLanguage = 'en';

  languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KZ' }
  ];

  constructor(
    private scrollService: ScrollService,
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private location: Location
  ) {}

  ngOnInit() {
    const path = this.location.path(); 
    const urlLang = path.split('/')[1];
    const lang = ['en', 'ru', 'kz'].includes(urlLang) ? urlLang : 'en';

    this.activeLanguage = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    this.authService.loggedIn$.subscribe((isAuth) => {
      this.isAuthentificated = isAuth;
    });
  }

  setLanguage(code: string) {
    this.activeLanguage = code;
    this.translate.use(code);
    this.router.navigate(['/', code]);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.isAuthentificated = false;
      this.router.navigate(['']);
      this.menu = false;
    });
  }

  navigateToProfile() {
    if (this.isAuthentificated) {
      this.router.navigate(['/', this.activeLanguage, 'profile']);
    } else {
      this.router.navigate(['/', this.activeLanguage, 'login']);
    }
  }
}
