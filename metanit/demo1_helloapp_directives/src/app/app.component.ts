import { Component} from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<div [ngClass]="{verdanaFont:isVerdana}">
                    <h1>Hello Angular 9</h1>
                    <p [ngClass]="{segoePrintFont:isSegoe}">
                        Angular 9 представляет модульную архитектуру приложения
                    </p>
                    вариант 2:
                    <p [class.verdanaFont]="false" [class.segoePrintFont]="true">
                        Angular 9 представляет модульную архитектуру приложения
                    </p>
                    вариант 3:
                    <div [ngClass]="currentClasses">
                        <p>
                            Angular 9 представляет модульную архитектуру приложения
                        </p>
                    </div>
                </div>
                <div [ngClass]="{invisible: visibility}">
                    <h1>Hello Angular 9</h1>
                    <p>
                        Angular 9 представляет модульную архитектуру приложения
                    </p>
                </div>
                <button (click)="toggle()">Toggle</button>
                <br /><br />
                <div>
                    Пример своей директивы:
                    <p bold>Hello Angular 9</p>
                </div>

                <br /><br />
                <div>
                    Пример своей директивы2:
                    <p bold2 selectedSize="28px" [defaultSize]="'14px'">Hello Angular 9</p>
                </div>

                <ul>
                  <li *ngFor="let item of items">{{item}}</li>
                </ul>

                <p *while="condition">
                Первый параграф
                </p>
                <p *while="!condition">
                Второй параграф
                </p>
                <button (click)="toggle2()">Toggle</button>
                `,
    styles: [
        `
        .verdanaFont{font-size:13px; font-family:Verdana;}
        .segoePrintFont{font-size:14px; font-family:"Segoe Print";}
        .invisible{display:none;}
        `
    ]
})
export class AppComponent {
    //https://metanit.com/web/angular2/3.1.php

    isVerdana = true;
    isSegoe = true;
    isNavy = true;

    currentClasses={
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }

    visibility: boolean = true;
    // переключаем переменную
    toggle(){
        this.visibility=!this.visibility;
    }

    //https://metanit.com/web/angular2/3.6.php
    condition: boolean=true;
    toggle2(){
        this.condition=!this.condition;
    }

    items =["Tom", "Bob", "Sam", "Bill"];
 }