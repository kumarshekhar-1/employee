import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../modal/user.modal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user =new BehaviorSubject<User>(null)


  constructor(private http:HttpClient,private _snackBar: MatSnackBar,private router:Router) { }
   registeruser(user)
   {
    console.log(user)
    return this.http.post("http://localhost:8080/api/auth/signup",user)
   }
  //  getregistrationlist()
  //  {
  //   return this.http.get("http://localhost:8080/api/auth/all")
  //  }
  //  updatstatus(id:number,data)
  //  {
  //   return this.http.put(`http://localhost:3000/users/${id}`,data)
  //  }
  //  delete(id:number)
  //  {
  //   return this.http.delete(`http://localhost:3000/users/${id}`)
  //  }
  //  login(User)
  //  {
  //   return this.http.get<any>(`http://localhost:3000/users/?UserName=${User}`).pipe(tap((data:any)=>{
  //       if(data[0].active==true)
  //        this.isloggedin=true
  //    this.role=data[0].role
  //    this.name=data[0].UserName
  //       let users={UserName:data[0].UserName,Password:data[0].Password}
  //       localStorage.setItem('userdata',JSON.stringify(users))
        
  //     }  
        
       
        
  //   ))
  //  }
  login(users){
    console.log(users)
     return this.http.post<any>('http://localhost:8080/api/auth/login',users).pipe(
      catchError(this.handelerror),
      tap(resposnsedata=>{

      const user =new User(resposnsedata.id,resposnsedata.username,resposnsedata.email,resposnsedata.roles,resposnsedata.accessToken)
      this.user.next(user)
       console.log(user)
      localStorage.setItem('userdata',JSON.stringify(user))
  }))
    
  }
  
   
  

   logout(){
    this.user.next(null)
        
    this.router.navigate(['/login'])
    localStorage.removeItem('userdata') }

  autologin(){
    const userdata=JSON.parse(localStorage.getItem('userdata'))
    if(!userdata)
    {
      return
    }
    else
    { const user =new User(userdata.id,userdata.username,userdata.Email,userdata.role,userdata._token)
        
           this.user.next(user)
       }
      
      
      
      }
      private handelerror(errorresponse:HttpErrorResponse){
        let errormsg='an error occured';
                if(!errorresponse.error || !errorresponse.error.error)
                {
                    return throwError(errormsg)
                }
               
                 else{   
                     errormsg=errorresponse.error.error.message
                }
                return throwError(errormsg)
              }
    
  





  openSnackBar(message: string, action: string = '  OK') {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}
