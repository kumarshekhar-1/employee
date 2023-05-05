import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router:Router,private service:AuthService){}
admin
ngOnInit(): void {
    let data= localStorage.getItem('userdata')
    this.service.login(JSON.parse(data).UserName).subscribe((data)=>
    {
      this.admin=data[0].role
    }

    )
   
  
}
 logout()
 {
   this.service.logout()
 }
}
