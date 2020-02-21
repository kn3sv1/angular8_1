import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
//import { AppComponent }   from './app.component';
//import { AppComponent }   from './appvalid.component';
//import { AppComponent }   from './appform.component';
import { AppComponent }   from './appreactiveform.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }