import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
 isloggedin:boolean=false
 role
 name
  constructor(private http:HttpClient,private _snackBar: MatSnackBar,private router:Router) { }
   registeruser(user)
   {
    return this.http.post("  http://localhost:3000/users",user)
   }
   getregistrationlist()
   {
    return this.http.get("  http://localhost:3000/users")
   }
   updatstatus(id:number,data)
   {
    return this.http.put(`http://localhost:3000/users/${id}`,data)
   }
   delete(id:number)
   {
    return this.http.delete(`http://localhost:3000/users/${id}`)
   }
   login(User)
   {
    return this.http.get<any>(`http://localhost:3000/users/?UserName=${User}`).pipe(tap((data:any)=>{
        if(data[0].active==true)
         this.isloggedin=true
     this.role=data[0].role
     this.name=data[0].UserName
        let users={UserName:data[0].UserName,Password:data[0].Password}
        localStorage.setItem('userdata',JSON.stringify(users))
        
      }  
        
       
        
    ))
   }
   
  

   logout(){
    this.isloggedin=false
    this.router.navigate(['/login'])
    localStorage.removeItem('userdata') }

  autologin(){
    const userdata=JSON.parse(localStorage.getItem('userdata'))
    if(!userdata)
    {
      this.isloggedin=false
    }
    else
    { 
      // let dat=[]
      // this.getregistrationlist().subscribe(data=>{
              
      //         for(let i in data)
      //         {
      //           dat.push(data[i].UserName)
      //           console.log(data[i].UserName)
      //         }
      //  })
      

      //  console.log(typeof(userdata.UserName))
      
      
       
      //  if(dat.includes(userdata.UserName))
      //  {
        this.isloggedin=true
        this.router.navigate(['/dashboard'])
       }
      //  else
      //  {
      // this.isloggedin=false
      //  }
      
      
      
      }
    
  





  openSnackBar(message: string, action: string = '  OK') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
