import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  data:any;
  
  constructor(private http: HttpClient) { }
  
  createUser(data):Observable<any> {
   return this.http.post('http://127.0.0.1:8000/api/user/create', data);
  }

  loginUser(data):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/user/login', data);
  }

}
