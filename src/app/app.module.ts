import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeacherComponent } from './Teacher/teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import { TeacherDetailComponent } from './Teacher/teacher-detail/teacher-detail.component';
import {TeacherService} from './Teacher/teacher/teacher.service';
import { AppRoutingModule } from './Teacher/teacher/app-routing.module';
import { TeacherSideBarComponent } from './teacher-side-bar/teacher-side-bar.component';
import { AccountLoginComponent } from './account-login/account-login.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    TeacherDetailComponent,
    TeacherSideBarComponent,
    AccountLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
