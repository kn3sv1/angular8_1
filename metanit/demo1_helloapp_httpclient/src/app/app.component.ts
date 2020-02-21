import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<div>
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
               </div>`
})
export class AppComponent implements OnInit { 
    //https://metanit.com/web/angular2/6.1.php
    user: User;
 
    constructor(private http: HttpClient){}
      
    ngOnInit(){
          
        this.http.get('/src/assets/user.json').subscribe((data:User) => this.user=data);
    }
}