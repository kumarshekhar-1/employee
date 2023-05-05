import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Employee } from 'src/app/modal/employee.model';
import { EmployeelocalserviceService } from 'src/app/services/employeelocalservice.service';
import { EpmloyeformComponent } from '../epmloyeform/epmloyeform.component';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-newemployeeform',
  templateUrl: './newemployeeform.component.html',
  styleUrls: ['./newemployeeform.component.css']
})
export class NewemployeeformComponent implements OnInit{

  EmployeeForm: FormGroup;
  id: number;
  user: Employee;
  Create: string = 'Create';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private route: Router,
    private dialog: MatDialogRef<NewemployeeformComponent>,
    private local: EmployeeserviceService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.Create = 'Save';
    }

    this.initform();
  }

  initform() {
    let firstName = '';
    
    let lastName=''
    let emailId=''
    let phoneNumber=''

    if (this.data) {
      firstName = this.data.firstName;
      lastName = this.data.lastName;
      emailId = this.data.emailId;
      phoneNumber = this.data.phoneNumber;
      
    }
    this.EmployeeForm = new FormGroup({
     firstName: new FormControl(firstName, [Validators.required]),
      lastName: new FormControl(lastName, [Validators.required]),
      phoneNumber: new FormControl(phoneNumber, [
        Validators.required,
        Validators.minLength(10),
      ]),
     emailId: new FormControl(emailId, [
        Validators.email,
        Validators.required,
      ]),
      
    });
  }
  create() {
    if (this.EmployeeForm.valid) {
      if (this.data) {
        this.local.saveemployeebyid(this.data.id, this.EmployeeForm.value)
          .subscribe({
            next: (val) => {
              this.dialog.close(true);
            },
          });
      } else {
        this.local.saveemployee(this.EmployeeForm.value).subscribe({
          next: (val) => {
            this.dialog.close(true);
          },
        });
      }
    }

    //
  }
  cancel(){
    this.EmployeeForm.reset()
    this.dialog.close()
  }
}
