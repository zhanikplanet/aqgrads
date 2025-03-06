import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
     provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes, withComponentInputBinding()), 
     provideClientHydration(withEventReplay()),
     providePrimeNG({
      theme: {
        preset: Aura,
        options:{
          darkModeSelector:false || 'none'
        }
      },
    }),
    provideToastr()
    ]
};
