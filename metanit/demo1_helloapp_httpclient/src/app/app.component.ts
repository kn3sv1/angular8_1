import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService} from './http.service';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<div>
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
               </div>
               <ul>
                    <li *ngFor="let user of users">
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
                    </li>
               </ul>
               `,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
    //https://metanit.com/web/angular2/6.1.php
    user: User;

    users: User[]=[];
 
    /*
    constructor(private http: HttpClient){}
      
    ngOnInit(){
          
        this.http.get('public/assets/user.json').subscribe((data:User) => this.user=data);
    }
    */

    //version 2 using SERVICE
   constructor(private httpService: HttpService){}
      
   ngOnInit(){
       this.httpService.getData().subscribe((data:User) => this.user=data);
       this.httpService.getAllUsers().subscribe(data => this.users=data["userList"]);
   }
}