import { Component, ViewChild } from '@angular/core';
import { Child20Component} from './child20.component';

@Component({
    selector: 'appchild-app',
    template: `
            <child20-comp></child20-comp>
            <button (click)="increment()">+</button>
            <button (click)="decrement()">-</button>
    `,
    //https://metanit.com/web/angular2/2.9.php
    styles: [` 
            
    `]
})
export class AppChildComponent { 
    @ViewChild(Child20Component, {static: false})
    private counterComponent: Child20Component;
     
    increment() { this.counterComponent.increment(); }
    decrement() { this.counterComponent.decrement(); }
}