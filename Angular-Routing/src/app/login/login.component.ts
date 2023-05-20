import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : User ={
    email : '',
    password : '',
    role : ''
  };
  status : boolean | undefined;

  constructor(){}

  onLogin(form:any){
    console.log(form);
    if(this.user.email=='rohit.g@gmail.com' && this.user.password=='rohit@123' && this.user.role=='Admin'){
      alert("Login Successfull ");
      this.status = true;
    }
    else{
      alert("Login Failed");
    }
  }

}
