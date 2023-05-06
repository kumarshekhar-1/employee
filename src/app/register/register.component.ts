import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Register } from '../modal/employee.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authservice:AuthService,private route:Router){}
  roles=['mod','user','admin']
  selectedrole
  show=false;
  showpassword() {
    this.show =!this.show
    }
   
   
   RegisterForm: FormGroup<any>;
    ngOnInit(): void {
    this.formintiation()
    }

    formintiation()
    {
       this.RegisterForm=new FormGroup({
        Username : new FormControl(null,[Validators.required]),
        Email : new FormControl(null,[Validators.required,Validators.email]),
        Password :new FormControl(null,[Validators.required,Validators.minLength(6)]),
        ConfirmPassword: new FormControl(null,[Validators.required,this.matchingPasswordsValidator.bind(this)]),
        Role :new FormControl(this.selectedrole,[Validators.required]),
        
        
       }
       )
    }

  
    Register() {
    if(this.RegisterForm.valid)
    { 
      const user={username:this.RegisterForm.value.Username,email:this.RegisterForm.value.Email,password:this.RegisterForm.value.Password,role:this.selectedrole}
      console.log(user)
     this.authservice.registeruser(user).subscribe( (data)=>{  console.log(data['message'])
      const d=data
      this.authservice.openSnackBar(data['message']);
     this.route.navigate(['/login'])},
     error=>{this.authservice.openSnackBar(error.error.message);
    this.RegisterForm.reset()})
    }
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
