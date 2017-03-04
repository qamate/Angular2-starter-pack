import 'core-js';
import 'reflect-metadata';
import 'zone.js';

// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.modules';
platformBrowserDynamic().bootstrapModule(AppModule);
