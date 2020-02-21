import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData() {
        return this.http.get('public/assets/user.json')
    }

    getAllUsers() {
        return this.http.get('public/assets/users.json')
    }
}