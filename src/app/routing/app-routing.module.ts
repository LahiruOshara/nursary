import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from '../Teacher/teacher/teacher.component';
import { AccountLoginComponent} from '../account-login/account-login.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import {AccountRegisterComponent} from '../Admin/account-register/account-register.component';
import { ProfileComponent } from '../profile/profile.component';
import { GuardService } from '../../app/services/guard.service';
import { LeaveApplicationComponent } from '../Teacher/leave-application/leave-application.component';
import { AdminSideBarComponent } from '../Admin/admin-side-bar/admin-side-bar.component';
import { AdminComponent } from '../Admin/admin/admin.component';
import { RequestForMaintenanceComponent} from '../Teacher/request-for-maintenance/request-for-maintenance.component';
import {AskForAdvancePaymentComponent} from '../Teacher/ask-for-advance-payment/ask-for-advance-payment.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teachers', component: TeacherComponent, canActivate: [GuardService]},
  {path: 'admin', component: AdminComponent, canActivate: [GuardService]},
  {path: 'accountLogIn', component: AccountLoginComponent  },
  {path: 'accountRegister', component: AccountRegisterComponent, canActivate: [GuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [GuardService]},
  {path: 'leaveApplication', component: LeaveApplicationComponent, canActivate: [GuardService]},
  {path: 'reqMantenance', component: RequestForMaintenanceComponent, canActivate: [GuardService]},
  {path: 'advPayment', component: AskForAdvancePaymentComponent, canActivate: [GuardService]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
