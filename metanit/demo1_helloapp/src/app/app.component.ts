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
                `,
    //https://metanit.com/web/angular2/2.4.php
    styles: [` 
            h1, h2{color:navy;}
            p{font-size:13px; font-family:Verdana;}
    `]
})
export class AppComponent { 
    name= '';
}