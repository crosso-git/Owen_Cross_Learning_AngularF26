import {InjectionToken} from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
  defaultId: number;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
