import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppChildComponent }   from './appchild.component';
import { Child20Component } from './child20.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppChildComponent, Child20Component],
    bootstrap:    [ AppChildComponent ]
})
export class AppChildModule { }