import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeelocalserviceService } from 'src/app/services/employeelocalservice.service';
import { EpmloyeformComponent } from '../epmloyeform/epmloyeform.component';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { NewemployeeformComponent } from '../newemployeeform/newemployeeform.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-newemployeepage',
  templateUrl: './newemployeepage.component.html',
  styleUrls: ['./newemployeepage.component.css']
})
export class NewemployeepageComponent implements OnInit {
  search: string;
  datasource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "emailId",
    "phoneNumber",
    "Action"
    
  ];
  disabled
  role:string[]
  constructor(
    private dialog: MatDialog,
    private service: EmployeeserviceService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getlist();
    this.auth.user.subscribe((data)=>{
      this.role=data.role})
      if(this.role.includes('ROLE_ADMIN') || this.role.includes('ROLE_MODERATOR'))
      {
        this.disabled=false
      }
      else{
        this.disabled=true
      }
  }

  getlist() {
    this.service.getemployee().subscribe((data: any) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
  }

  create() {
    const dialogref = this.dialog.open(NewemployeeformComponent);
    dialogref.afterClosed().subscribe({
      next: (val) => {
        this.getlist();
      },
    });
  }
  edit(data) {
    const dialogref = this.dialog.open(NewemployeeformComponent, { data });
    dialogref.afterClosed().subscribe({
      next: (val) => {
        this.getlist();
      },
    });
  }
  Search(event: boolean) {
    const filterValue = this.search;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  ondelete(id: number) {
    const agree=window.confirm("confirmed to delete")
    if(agree)
    {
    this.service.deleteemployee(id).subscribe({
      next: (data) => this.getlist(),
    });
  }
  
}
}