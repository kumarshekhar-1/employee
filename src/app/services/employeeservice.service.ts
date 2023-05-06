import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../modal/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor( private http:HttpClient) { }

  getemployee()
  {
    return this.http.get<any>("http://localhost:8080/api/employee/all")
  }
  // getemployeebyid(id:number){
  //   return this.http.get<any>(`http://localhost:9090/api/v1/employees/${id}`)
  // }
  saveemployee(user){
    return this.http.post<any>("http://localhost:8080/api/employee/create",user)}

  saveemployeebyid(id:number,user)
  {
    return this.http.put<any>(`http://localhost:8080/api/employee/update/${id}`,user)
  }
   deleteemployee(id:number)
   {
    return this.http.delete(`http://localhost:8080/api/employee/delete/${id}`)
   }
}
