import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string|any;
  password:string|any;
  role:string|any;
  loggedIn:any;

  constructor(private svc : AuthService){}

  onLogin(form:any){
    console.log(form);
    if(this.svc.logIn(this.email,this.password,this.role)){
      alert("Login Successfull");
      this.loggedIn=true;
      
    }
    else{
      alert("Login Failed");
    }
  }

}
