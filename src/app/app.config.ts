import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {APP_CONFIG} from './shared/interface/app-config';
import mockWeaponService, {MockWeaponService} from './services/mock-weapon-service';
import {WeaponService} from './services/weapon-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://fake.api.com/what',
        defaultKind: 'great-sword'
    }},
    {
      provide: WeaponService,
      useClass: MockWeaponService
    }
  ]
};
