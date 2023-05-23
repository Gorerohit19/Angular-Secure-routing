import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers = [
    {id:1, firstName:'Pragati', lastName:'Bangar',contactNumber:8978987898},
    {id:2, firstName:'Rushikesh', lastName:'Chikane',contactNumber:8978987898},
    {id:3, firstName:'Akash', lastName:'Ajab',contactNumber:8978987898},
    {id:4, firstName:'Akshay', lastName:'Tanpure',contactNumber:8978987898},
  ]
  constructor() { }
}
