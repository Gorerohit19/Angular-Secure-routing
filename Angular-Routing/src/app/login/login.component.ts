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
      localStorage.setItem("jwtToken",response.token);
      this.loggedIn = true;
      this.loginFormVisible = false;
      if(this.user){
        this.validUser = true;
      }
      const role = this.svc.getRoleFromToken();
      console.log("Role from Token");
      console.log(role);
      // if(role == "Admin"){
      //   const id = this.svc.getAdminFromToken();
      //   console.log(id);
      // };
      // if(role == "Customer"){
      //   const id = this.svc.getCustomerFromToken();
      //   console.log(id);
      // };
      // if(role == "Employee"){
      //   const id = this.svc.getEmployeeFromToken();
      //   console.log(id);
      // };
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
