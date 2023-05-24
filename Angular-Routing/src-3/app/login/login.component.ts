import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User = {
  email:'',
  password:''
  };

  loggedIn:any;
  role:any;


  constructor(private svc : AuthService, private router : Router){}

  onLogin(){
    this.svc.logIn(this.user).subscribe((response)=>{
      console.log(response.token);
      localStorage.setItem("jwt",response.token);
      console.log(response);
      if(response){
        alert("Login is Successfull & you get token");
      };
    });
  };

}
