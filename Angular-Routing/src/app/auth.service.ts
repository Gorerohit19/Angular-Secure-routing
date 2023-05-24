import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private jwtHelper : JwtHelperService) { }

  logIn(user:User):Observable<any>{
    console.log("Inside Request");
    let url ="http://localhost:5291/api/auth/authenticate/";
    return this.http.post<User>(url,user);
  };

  getEmpById(empId:number):Observable<any>{
    let url = "http://localhost:5189/api/employees/getemployeedetails/"+ empId;
    return this.http.get<any>(url);
  }
}