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
import { GetStudentComponent} from '../../app/Admin/get-student/get-student.component';

import { ParentComponent } from '../../app/Parent/parent/parent.component';
import { ApplyTransportComponent } from '../../app/Parent/apply-transport/apply-transport.component';
import { ViweTeacherComponent } from '../../app/parent/viwe-teacher/viwe-teacher.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'declareholiday', component: DeclareholidayComponent},
  {path: 'teachers', component: TeacherComponent, canActivate: [TeacherLinkGuardService]},
  {path: 'admin', component: AdminComponent, canActivate: [GuardService]},
  {path: 'accountLogIn', component: AccountLoginComponent  },
  {path: 'accountRegister', component: AccountRegisterComponent, canActivate: [AdminLinkGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [GuardService]},
  {path: 'leaveApplication', component: LeaveApplicationComponent, canActivate: [TeacherLinkGuardService]},
  {path: 'reqMantenance', component: RequestForMaintenanceComponent, canActivate: [GuardService]},
  {path: 'advPayment', component: AskForAdvancePaymentComponent, canActivate: [GuardService]},
  {path: 'approveLeave', component: ApproveLeaveApplicationComponent, canActivate: [AdminLinkGuardService]},
  {path: 'studentDetails', component: DisplayStudentComponent, canActivate: [TeacherLinkGuardService]},
  {path: 'studentDetailsA', component: GetStudentComponent, canActivate: [AdminLinkGuardService]},


  {path: 'parent', component: ParentComponent},
  {path: 'applyTransport', component: ApplyTransportComponent},
  {path: 'viweTeacher', component: ViweTeacherComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
