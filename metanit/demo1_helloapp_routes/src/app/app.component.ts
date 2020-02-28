import { Component} from '@angular/core';
import {Router} from '@angular/router';
  
export class Item{
     
    id: number;
    product: string;
    price: number;
}
       
@Component({
    selector: 'my-app',
    template: `<div [ngClass]="{verdanaFont:true}">
                    <h1>Hello Angular 9</h1>
<div class="nav-menu">
    <a [routerLink]="'/about'" routerLinkActive="active"> About </a>
    <a [routerLink]="''" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" > Home </a>
    <a [routerLink]="'/wewqe'"> notfound </a>
    <a [routerLink]="['item', '5']">item 5</a>
    <a [routerLink]="['item', '8']">item 8</a>
        <a [routerLink]="['item', '5']"
            [queryParams]="{'product':'phone', 'price': 200}">item 5 Product</a>
        <a [routerLink]="['item', '8']"
            [queryParams]="{'product':'tablet'}">item 8 Product</a>
</div>
            <router-outlet></router-outlet>
            <p [ngClass]="{segoePrintFont:true}">
                Angular 9 представляет модульную архитектуру приложения
            </p>
            <button (click)="goHome()">На главную</button>

            <div  class="form-group">
                <h3>Параметры объекта</h3>
                <input type="number" [(ngModel)]="item.id" class="form-control" placeholder="Номер модели"/><br />
                <input type="number" [(ngModel)]="item.price" class="form-control" placeholder="Цена" /><br />
                <input [(ngModel)]="item.product" class="form-control" placeholder="Товар" /><br />
                <button (click)="goToItem(item)" class="btn">Перейти</button>
            </div>
</div>`,
    styles: [
        `
        .verdanaFont{font-size:13px; font-family:Verdana;}
        .segoePrintFont{font-size:14px; font-family:"Segoe Print";}
        .nav-menu a {display:block;}
        .active {color:red;}
        `
    ]
})
export class AppComponent {

    item: Item=new Item();

    constructor(private router: Router){}

    //https://metanit.com/web/angular2/7.5.php
    goHome(){
        //this.router.navigate(['/about']);
        this.router.navigate(['']);
    }

    //https://metanit.com/web/angular2/7.5.php
    goToItem(myItem: Item){
             
        this.router.navigate(
            ['/item', myItem.id], 
            {
                queryParams:{
                    'product': myItem.product, 
                    'price': myItem.price
                }
            }
        );
    }
 }