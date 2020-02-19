import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App2Module } from './app/app2.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(App2Module);