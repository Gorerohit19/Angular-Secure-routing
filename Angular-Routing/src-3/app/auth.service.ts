import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  logIn(user:User):Observable<any>{
    console.log("Inside Request");
    let url ="http://localhost:5291/api/auth/authenticate/";
    return this.http.post<User>(url,user);
  };
}