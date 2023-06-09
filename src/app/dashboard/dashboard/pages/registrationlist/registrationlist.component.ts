import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrationlist',
  templateUrl: './registrationlist.component.html',
  styleUrls: ['./registrationlist.component.css']
})
export class RegistrationlistComponent implements OnInit{
 
displayedColumns: string[] = [
  'id',
  'username',
  'Email',
  'role',
  
];
// rolechange
// rowchange
// access
// rolecheck(e:Event,row)
// {
//    this.rolechange=e
//    this.rowchange=row
// }


// check(e:Event,row)
// { this.access=e
//   let data={UserName:row.UserName,
//   Email: row.Email,
//   Password: row.Password,
//   ConfirmPassword: row.ConfirmPassword,
//   role: row.role,
//   active: e}
//    this.service.updatstatus(row.id,data).subscribe(data=>{
//     console.log(data)
//    })
   
 

// update(id,row)
// {let data={...row}
//   this.service.updatstatus(id,data).subscribe(data=>{
  
//   console.log(data)
  
// })}

// ondelete(id) {
//   this.service.delete(id).subscribe()
//    this.getlist()



// }
// rol
search
datasource: MatTableDataSource<any>;

 constructor(private service:AuthService){}
 ngOnInit(): void {
     this.getlist()
     }


 
 getlist(){
  this.service.user.subscribe((data:any)=>{
     const list=[{id:data.id,username:data.username,
     Email:data.Email,
     role:data.role}]
   
     this.datasource=new MatTableDataSource(list)
  })
    
 }
 Search(issearch: boolean) {
   
   
    this.datasource.filter=this.search.trim().toLowerCase()
   
 }
}
