import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authservice:AuthService,private route:Router){}
  showpassword() {
    this.show =!this.show
    }
    show=false;
   
   RegisterForm: FormGroup<any>;
    ngOnInit(): void {
    this.formintiation()
    }
    formintiation()
    {
       this.RegisterForm=new FormGroup({
        UserName : new FormControl(null,[Validators.required]),
        Email : new FormControl(null,[Validators.required,Validators.email]),
        Password :new FormControl(null,[Validators.required,Validators.minLength(6)]),
        ConfirmPassword: new FormControl(null,[Validators.required,this.matchingPasswordsValidator.bind(this)]),
        role :new FormControl('Not Assigned'),
        active:new FormControl(false)
        
       }
       )
    }
    Register() {
    if(this.RegisterForm.valid)
    {
     this.authservice.registeruser(this.RegisterForm.value).subscribe( data=>{  console.log(data)
     this.route.navigate(['/login'])}
    
     
 )}
 else
 {
  this.authservice.openSnackBar('Please Enter the Valid Credential');
 }

    }
    matchingPasswordsValidator(control: AbstractControl) {
      const password = control.parent?.get('Password');
      const confirmPassword = control.value;
    
      if (password && confirmPassword && password.value !== confirmPassword) {
        return { mismatchedPasswords: true };
      }
    
      return null;
    }
}
