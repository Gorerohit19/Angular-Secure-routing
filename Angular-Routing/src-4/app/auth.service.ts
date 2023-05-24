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

  getRoleFromToken(): string {
    const token = localStorage.getItem('jwtToken');
    if(token){
      const decodedToken : any = this.jwtHelper.decodeToken(token);
      const role = localStorage.setItem('Roles', decodedToken.Roles)
      return decodedToken.Roles;
    }
    return '';
  };

  getAdminFromToken(): number {
    const token : any = localStorage.getItem('jwtToken');
    const decodedToken : any = this.jwtHelper.decodeToken(token);
    return decodedToken.id;
  }

  getCustomerFromToken(): number {
    const token : any = localStorage.getItem('jwtToken');
    const decodedToken : any = this.jwtHelper.decodeToken(token);
    return decodedToken.id;
  }

  getEmployeeFromToken(): number {
    const token : any = localStorage.getItem('jwtToken');
    const decodedToken : any = this.jwtHelper.decodeToken(token);
    return decodedToken.id;
  }
}