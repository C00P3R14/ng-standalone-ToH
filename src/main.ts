import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    importProvidersFrom(),
    provideRouter(routes)
  ],
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/