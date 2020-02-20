import { Component, ViewChild, ElementRef } from '@angular/core';
import { Child20Component} from './child20.component';

@Component({
    selector: 'appchild-app',
    template: `
            <child20-comp></child20-comp>
            <button (click)="increment()">+</button>
            <button (click)="decrement()">-</button>

            <br />Variable of template<br />
            <p #nameText>{{name}}</p>
               <p>{{nameText.textContent}}</p>
               <button (click)="change()">Изменить</button>
    `,
    //https://metanit.com/web/angular2/2.9.php
    styles: [` 
            
    `]
})
export class AppChildComponent { 
    //http://localhost:8080/index_child.html

    @ViewChild(Child20Component, {static: false})
    private counterComponent: Child20Component;
     
    increment() { this.counterComponent.increment(); }
    decrement() { this.counterComponent.decrement(); }


    //https://metanit.com/web/angular2/2.9.php
    //Привязка ViewChild к шаблонным переменным
    @ViewChild("nameText", {static: false})
    nameParagraph: ElementRef;
     
    name: string = "Tom";
     
    change() { 
        console.log(this.nameParagraph.nativeElement.textContent); 
        this.nameParagraph.nativeElement.textContent = "hell";
    }
}