import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpmloyeepageComponent } from 'src/app/dashboard/dashboard/pages/epmloyeepage/epmloyeepage.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { ComponentPortal } from '@angular/cdk/portal';
import { RegistrationlistComponent } from './pages/registrationlist/registrationlist.component';
import { AdminGuard } from 'src/app/services/admin.guard';
import { NewemployeepageComponent } from './pages/newemployeepage/newemployeepage.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,
    children:[
              
  { path: 'Employe', component: EpmloyeepageComponent },
  {path:'NewEmploye',component:NewemployeepageComponent},
{ path:'List',component:RegistrationlistComponent}],canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
