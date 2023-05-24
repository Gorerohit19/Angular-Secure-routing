import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  
  fistName : string | any;
  lastName : string | any;
  id : number | any;
  empId = localStorage.getItem('empId') || '{}';
  status : boolean = false;

  constructor(private svc : AuthService){}

  async ngOnInit(): Promise<any> {
    console.log("on Init");
    console.log(this.empId);
    this.id = parseInt(this.empId);
    this.svc.getEmpById(this.id).subscribe((response) => {
      this.fistName = response.employeeFirstName;
      this.lastName = response.employeeLastname;
    });
  };
}
