import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
//import { AppComponent }   from './purchase.component';
import { ChildComponent }   from './child.component';
import { Child2Component }   from './child2.component';
import { Child3Component }   from './child3.component';
import { Child4Component }   from './child4.component';
import { DataModule } from './data/data.module';

@NgModule({
    imports:      [ BrowserModule, FormsModule, DataModule ],
    declarations: [ AppComponent, ChildComponent, Child2Component, Child3Component, Child4Component ],
    bootstrap:    [ AppComponent ]
})
export class App2Module { }