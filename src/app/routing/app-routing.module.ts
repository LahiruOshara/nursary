import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from '../Teacher/teacher/teacher.component';
import {TeacherDetailComponent} from '../Teacher/teacher-detail/teacher-detail.component';
import { AccountLoginComponent} from '../account-login/account-login.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import {AccountRegisterComponent} from '../account-register/account-register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teachers', component: TeacherComponent},
  {path: 'detail/:id', component: TeacherDetailComponent },
  {path: 'accountLogIn', component: AccountLoginComponent  },
  {path:'accountRegister',component:AccountRegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
