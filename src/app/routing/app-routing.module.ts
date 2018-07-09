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
import { DeclareholidayComponent } from '../Admin/declareholiday/declareholiday.component';
import { ApproveLeaveApplicationComponent } from '../Admin/approve-leave-application/approve-leave-application.component';
import { AdminLinkGuardService} from '../../app/services/admin-link-guard.service';
import { TeacherLinkGuardService} from '../../app/services/teacher-link-guard.service';
import { DisplayStudentComponent} from '../../app/Teacher/display-student/display-student.component';
import {SalarySheetComponent} from '../Teacher/salary-sheet/salary-sheet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'declareholiday', component: DeclareholidayComponent,canActivate: [GuardService]},
  {path: 'teachers', component: TeacherComponent,canActivate: [GuardService]},
  {path: 'admin', component: AdminComponent, canActivate: [GuardService]},
  {path: 'accountLogIn', component: AccountLoginComponent  },
  {path: 'accountRegister', component: AccountRegisterComponent, canActivate: [AdminLinkGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [GuardService]},
  {path: 'leaveApplication', component: LeaveApplicationComponent, canActivate: [TeacherLinkGuardService]},
  {path: 'reqMantenance', component: RequestForMaintenanceComponent, },
  {path: 'advPayment', component: AskForAdvancePaymentComponent, canActivate: [GuardService]},
  {path: 'approveLeave', component: ApproveLeaveApplicationComponent},
  {path: 'studentDetails', component: DisplayStudentComponent,canActivate: [GuardService] },
  {path:'salarySheet',component:SalarySheetComponent,canActivate: [GuardService]}
 
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
