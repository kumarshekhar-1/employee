import { Component,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee';

  constructor(private auth:AuthService,private route:Router ){}
  ngOnInit(): void {
     this.auth.autologin()
     this.auth.user.subscribe(()=>{
       this.route.navigate(['/dashboard'])
     })
    
  }
}
