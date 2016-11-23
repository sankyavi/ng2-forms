import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
//import { AppModule } from './app/';
//import { AppModule2 } from './app/dyna-form/app.module';
import { AppModule3 } from './app/dyna-form/app';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule3);
