import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { ScrollService } from '../shared/scroll.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule, RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  menu: boolean = false;
  isAuthentificated: boolean = false

  constructor(private scrollService: ScrollService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn$.subscribe((isAuth) => {
      this.isAuthentificated = isAuth;
    });
  }

  activeLanguage = 'en';

  languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KZ' }
  ];

  setLanguage(code: string) {
    this.activeLanguage = code;
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
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
