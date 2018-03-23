import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from './teacher.component';
import {TeacherDetailComponent} from '../teacher-detail/teacher-detail.component';
import { AccountLoginComponent} from '../../account-login/account-login.component';

const routes: Routes = [
  {path: 'teachers', component: TeacherComponent},
  {path: 'detail/:id', component: TeacherDetailComponent },
  {path: 'accountLogIn', component: AccountLoginComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
