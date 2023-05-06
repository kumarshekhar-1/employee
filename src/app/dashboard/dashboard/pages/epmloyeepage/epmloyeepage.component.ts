import {
  Component,
  ViewChild,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EpmloyeformComponent } from '../epmloyeform/epmloyeform.component';
import { MatTableDataSource } from '@angular/material/table';

import { Dialog } from '@angular/cdk/dialog';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { Employee } from 'src/app/modal/employee.model';
import { EmployeelocalserviceService } from 'src/app/services/employeelocalservice.service';
import { Data } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-epmloyeepage',
  templateUrl: './epmloyeepage.component.html',
  styleUrls: ['./epmloyeepage.component.css'],
})
export class EpmloyeepageComponent implements OnInit {
  search: string;
  datasource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'Name',
    'EmployeeNo',
    'ContactNo',
    'EmailId',
    'Address',
    'Action',
  ];

  constructor(
    private dialog: MatDialog,
    private service: EmployeelocalserviceService,
    private suth:AuthService
  ) {}

  username
  role
  ngOnInit(): void {
    this.getlist();
    this.username=JSON.parse(localStorage.getItem('userdata')).UserName
    // this.role=this.suth.role
    
  }
  
  getlist() {
    this.service.getemployee().subscribe((data: any) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
  }

  create() {
    const dialogref = this.dialog.open(EpmloyeformComponent);
    dialogref.afterClosed().subscribe({
      next: (val) => {
        this.getlist();
      },
    });
  }
  edit(data) {
    const dialogref = this.dialog.open(EpmloyeformComponent, { data });
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
    this.service.deleteemployee(id).subscribe({
      next: (data) => this.getlist(),
    });
  }
}
