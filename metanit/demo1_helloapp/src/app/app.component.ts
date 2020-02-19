import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Styles example</h1>
                <label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>
                 One way: <input type="text" [value]="name" />
                 <br />https://metanit.com/web/angular2/2.5.php<br />
                 Two way: <input type="text" [(ngModel)]="name" />
                 <br />
                 Property binding: 
                        <input type="text" [value]="name" />
                        <br />
                        <p [textContent]="name"></p>
                <br />
                <table border="1">
                        <tr><td [attr.colspan]="colspan">One-Two</td></tr>
                        <tr><td>Three</td><td>Four</td></tr>
                        <tr><td>Five</td><td>Six</td></tr>
                </table>
                <p>Количество кликов {{count}}</p>
                <button (click)="increase()">Click</button>

                <br />
                https://metanit.com/web/angular2/2.5.php
                <div class="is_block">
                    <div [class.isredbox]="isRed">isRed</div>
                    <div [class.isredbox]="!isRed">!isRed</div>
                    <input type="checkbox" [(ngModel)]="isRed" />
                    <br />
                    <div [class]="red">red =  isredbox </div>
                </div>

                <br /><br />
                https://metanit.com/web/angular2/2.6.php
                <child-comp><h2>Добро пожаловать {{name}}!</h2></child-comp>

                <child2-comp [userName]="name" [userAge]="age"></child2-comp>
                User AGE: <input type="number" [(ngModel)]="age" />
                `,
    //https://metanit.com/web/angular2/2.4.php
    styles: [` 
            h1, h2{color:navy;}
            p{font-size:13px; font-family:Verdana;}
            .is_block div { width:50px; height:50px; border:1px solid #ccc  }
            .isredbox { background-color:red;}
    `]
})
export class AppComponent { 
    name:string="Tom";
    age:number = 24;

    colspan=2;

    red = "isredbox"
    isRed = false;

    constructor() {
        /*
        setInterval(() => {
            this.name = new Date().toUTCString();
        }, 1000);
        */

        /*
        setInterval(() => {
            this.colspan = parseInt(this.name);
        }, 1000);
        */
    }

    count: number=0;
    increase() : void {
        this.count++;
    }
}