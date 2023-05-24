import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  
  empFistName : string | any;
  empLastName : string | any;
  id : number | any;
  empId = localStorage.getItem('employeeId') || '{}';
  status : boolean = false;

  constructor(private svc : AuthService){}

  async ngOnInit(): Promise<any> {
    console.log("on Init");
    console.log(this.empId);
    this.id = parseInt(this.empId);
    this.svc.getEmpById(this.id).subscribe((response) => {
      this.empFistName = response.empFirstName;
      this.empLastName = response.empLastName;
    });
  };
}
