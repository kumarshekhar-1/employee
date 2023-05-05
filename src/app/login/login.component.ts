import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  constructor(private service:AuthService,private route:Router){}


show=false;

LoginForm: FormGroup<any>;
ngOnInit(): void {
this.formintiation()
}
formintiation()
{
   this.LoginForm=new FormGroup({
    UserName : new FormControl(null,[Validators.required]),
    Password :new FormControl(null,[Validators.required,Validators.minLength(6)])
   }
   )
}
showpassword() {
  this.show =!this.show
  }
Login() {
   

  if(this.LoginForm.valid){
    this.service.login(this.LoginForm.value.UserName).subscribe((data:any)=>{
      console.log(data)
      console.log(this.LoginForm.value.Password)
     if(data[0].Password==this.LoginForm.value.Password)
     {  
       this.route.navigate(['/dashboard'])
    }})
  }
 }
}
