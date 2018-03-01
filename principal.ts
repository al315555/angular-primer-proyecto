import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgForm } from "@angular/forms";
import { AppModule } from './app/modulo';
import { LoginFormComponent} from './app/formularioLogin/modulo'

platformBrowserDynamic().bootstrapModule(LoginFormComponent);

