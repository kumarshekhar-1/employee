import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from 'src/app/modal/employee.model';
import { EmployeelocalserviceService } from 'src/app/services/employeelocalservice.service';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-epmloyeform',
  templateUrl: './epmloyeform.component.html',
  styleUrls: ['./epmloyeform.component.css'],
})
export class EpmloyeformComponent implements OnInit {
  EmployeeForm: FormGroup;
  id: number;
  user: Employee;
  Create: string = 'Create';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private route: Router,
    private dialog: MatDialogRef<EpmloyeformComponent>,
    private local: EmployeelocalserviceService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.Create = 'Save';
    }

    this.initform();
  }

  initform() {
    let Name = '';
    let EmployeeNo = '';
    let ContactNo = '';
    let EmailId = '';
    let Address = '';

    if (this.data) {
      Name = this.data.Name;
      EmployeeNo = this.data.EmployeeNo;
      ContactNo = this.data.ContactNo;
      EmailId = this.data.EmailId;
      Address = this.data.Address;
    }
    this.EmployeeForm = new FormGroup({
      Name: new FormControl(Name, [Validators.required]),
      EmployeeNo: new FormControl(EmployeeNo, [Validators.required]),
      ContactNo: new FormControl(ContactNo, [
        Validators.required,
        Validators.minLength(10),
      ]),
      EmailId: new FormControl(EmailId, [
        Validators.email,
        Validators.required,
      ]),
      Address: new FormControl(Address, [Validators.required]),
    });
  }
  create() {
    if (this.EmployeeForm.valid) {
      if (this.data) {
        this.local
          .updateemployee(this.data.id, this.EmployeeForm.value)
          .subscribe({
            next: (val) => {
              this.dialog.close(true);
            },
          });
      } else {
        this.local.addEmployee(this.EmployeeForm.value).subscribe({
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
