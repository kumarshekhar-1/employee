import { Injectable } from '@angular/core';
import { Employee } from '../modal/employee.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeelocalserviceService {

  constructor( private http:HttpClient) { }
  
   addEmployee(data)
   {  
     return this.http.post("http://localhost:3000/employee",data)
   }
   getemployee()
   {
    return this.http.get("http://localhost:3000/employee")
   }
   deleteemployee(id:number)
   {
    return this.http.delete(`http://localhost:3000/employee/${id}`)
   }
   updateemployee(id:number,data)
   {
    return this.http.put(`http://localhost:3000/employee/${id}`,data)
   }
    
}
 
 
    
    
  


