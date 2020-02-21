import { Component} from '@angular/core';
import { NgModel} from '@angular/forms';
         
export class Phone{
    constructor(public title: string, 
                public price: number, 
                public company: string)
    { }
}
 
@Component({
    selector: 'my-app',
    template: `<div style="width:500px" class="container"><form action="">
                <div>
                    <div class="form-group">
                        <label>Название модели</label>
                        <input class="form-control" name="title" [(ngModel)]="phone.title" (change)="onTitleChange()"  #phoneTitle="ngModel" />
                    </div>
                    <div class="form-group">
                        <label>Цена</label>
                        <input type="number" class="form-control" name="price" [(ngModel)]="phone.price" #phonePrice="ngModel" />
                    </div>
                    <div class="form-group">
                        <label>Производитель</label>
                        <select class="form-control" name="company" [(ngModel)]="phone.company" #phoneCompany="ngModel">
                            <option  *ngFor="let comp of companies" [value]="comp">
                                {{comp}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default" (click)="addPhone2(phoneTitle, phonePrice, phoneCompany)">Добавить</button>
                    </div>
                </div>
                <div><h3>Добавленные элементы</h3>
                    <ul *ngFor="let p of phones">
                        <li>{{p.title}} ({{p.company}}) - {{p.price}}</li>
                    </ul>
                </div>
                <div>
                    <p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>
                    <p>{{phonePrice.name}} : {{phonePrice.model}}</p>
                    <p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>
                </div>
                </form></div>`
})
export class AppComponent { 
 
    title: string;
    price: number;
    company: string;
    
    phone: Phone = new Phone("", 0, "Huawei");
     
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
     
    addPhone(){
        //this.phones.push(new Phone(this.title, this.price, this.company));
        this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
        this.phone = new Phone("", 0, "Huawei");
    }

    addPhone2(title:NgModel, price: NgModel, company: NgModel) {
        this.phones.push(new Phone(title.model, price.model, company.model));

        console.log(title);
        console.log(price);
        console.log(company);
    }
    //https://metanit.com/web/angular2/5.2.php
    onTitleChange() {
         
        if(this.phone.title=="no")
            this.phone.title = "unknown";
    }
}