import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerlistComponent } from './customerlist/customerlist.component';




@NgModule({
  declarations: [
  
    CustomerlistComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CustomerlistComponent
  ]
})
export class CustomerModule { }
