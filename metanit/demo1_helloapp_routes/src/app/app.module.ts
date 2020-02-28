import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';
import { ItemComponent } from './item.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    //https://metanit.com/web/angular2/7.3.php
    { path: 'item/:id', component: ItemComponent},
    { path: '**', component: NotFoundComponent }
];

//http://localhost:8080/#/about
//RouterModule.forRoot(appRoutes, { useHash: true })

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ItemComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }