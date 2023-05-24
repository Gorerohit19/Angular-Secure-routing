import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  
  role = localStorage.getItem('role');
  statusAdmin : Boolean = false;
  statusCustomer : Boolean = false;

  ngOnInit(): void {
    
    if(this.role == "Admin"){
      this.statusAdmin=true;
    }

    if(this.role == "Customer"){
      this.statusCustomer=true;
    }
  }
}
