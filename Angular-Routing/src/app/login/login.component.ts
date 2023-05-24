import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loggedIn : boolean = false;
  role:any;
  validUser : boolean = false;
  loginFormVisible : boolean = true;
  btnSignIn : boolean = false;
  btnSignOut : boolean = false;

  user:User = {
    email:'',
    password:''
  };


  constructor(private svc : AuthService, private router : Router){}
  ngOnInit(): void {
    this.loginFormVisible = false;
    this.btnSignIn = true;
  }

  onLogin(){
    this.btnSignIn = true;
    this.svc.logIn(this.user).subscribe((response)=>{
      localStorage.setItem('jwtToken', response.token);
      localStorage.setItem('employeeId', response.userId)
      if(this.user){
        this.validUser = true;
      }
    });
    this.router.navigate(['/routing']);
  };

  login(){
    this.loginFormVisible = true;
    this.btnSignIn = false;
    this.btnSignOut = true;
  };

  logout(){
    this.btnSignIn = true;
    this.btnSignOut = false;
    this.loginFormVisible = false;
    this.validUser = false;
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("Roles");
    this.router.navigate(['/login']);
  };
}
