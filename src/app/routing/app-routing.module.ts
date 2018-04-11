import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from '../Teacher/teacher/teacher.component';
import { AccountLoginComponent} from '../account-login/account-login.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import {AccountRegisterComponent} from '../account-register/account-register.component';
import { ProfileComponent } from '../profile/profile.component';
import { GuardService } from '../../app/services/guard.service';
import { LeaveApplicationComponent } from '../Teacher/leave-application/leave-application.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teachers', component: TeacherComponent, canActivate: [GuardService]},
  {path: 'accountLogIn', component: AccountLoginComponent  },
  {path: 'accountRegister', component: AccountRegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [GuardService]},
  {path: 'leaveApplication', component: LeaveApplicationComponent, canActivate: [GuardService]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
