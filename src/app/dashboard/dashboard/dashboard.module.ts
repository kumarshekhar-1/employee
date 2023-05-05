import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EpmloyeepageComponent } from 'src/app/dashboard/dashboard/pages/epmloyeepage/epmloyeepage.component';
import { EpmloyeformComponent } from 'src/app/dashboard/dashboard/pages/epmloyeform/epmloyeform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationlistComponent } from './pages/registrationlist/registrationlist.component';
import { NewemployeeformComponent } from './pages/newemployeeform/newemployeeform.component';
import { NewemployeepageComponent } from './pages/newemployeepage/newemployeepage.component';

@NgModule({
  declarations: [EpmloyeepageComponent, EpmloyeformComponent, RegistrationlistComponent, NewemployeeformComponent, NewemployeepageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [],
  providers:[{ provide: MAT_DIALOG_DATA, useValue: {} }]
})
export class DashboardModule {}
