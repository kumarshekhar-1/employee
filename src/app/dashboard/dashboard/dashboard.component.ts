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
    
    

    
   
  
}
 logout()
 {
   this.service.logout()
 }
}
