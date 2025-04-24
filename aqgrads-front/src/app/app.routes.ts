import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutComponent } from './layout/layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../guard/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    {
      path: '', 
      component: LayoutComponent,
      children: [
        { path: '', component: MainPageComponent },
        { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
      ]
    },
    { path: '**', redirectTo: 'login' } 
  ];
  
