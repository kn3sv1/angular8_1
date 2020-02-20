import { Component, EventEmitter, Input, Output } from '@angular/core';
      
@Component({
    selector: 'child3-comp',
    template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>
               <br /><br />

               [ngModel] - it's property binding only, not two-way binding. So entering new value will not update<br />
               [(ngModel)] is two way binding that comes from Angular 2. [ngModel] is just for show up<br />
               То есть здесь извне мы получаем значение для свойства userName и устанавливаем его для текстового поля.<br />
               При вводе пользователя в это поле генерируем во вне событие userNameChange<br />

               Two way binding: <input [ngModel]="userName" (ngModelChange)="onNameChange4($event)" /> 

               <br /><br />
               
            `
})
export class Child3Component { 
    //https://metanit.com/web/angular2/2.10.php

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }


    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange4(model: string){    
        //console.log(model);
        //this.userName = model;
        this.userNameChange.emit(model);
    }
}