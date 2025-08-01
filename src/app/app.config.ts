import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';         // ✅ HINZUGEFÜGT
import { FormsModule } from '@angular/forms';           // ✅ HINZUGEFÜGT

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([])),
    provideAnimations(),
    importProvidersFrom(CommonModule, FormsModule)     // ✅ HINZUGEFÜGT
  ]
};
