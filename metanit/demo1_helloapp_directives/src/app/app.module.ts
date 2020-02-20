import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';

//https://metanit.com/web/angular2/3.2.php
import { BoldDirective} from './bold.directive';

import { Bold2Directive} from './bold2.directive';
import { WhileDirective} from './while.directive';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, BoldDirective, Bold2Directive, WhileDirective ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }