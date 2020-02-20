import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppChildModule } from './app/app_child.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppChildModule);