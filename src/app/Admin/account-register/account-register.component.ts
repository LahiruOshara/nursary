import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})

export class AccountRegisterComponent implements OnInit {
  // user fields

  firstName: String;
  middleName: String;
  lastName: String;
  accountType: String;
  address: String;
  mobileNo: String;
  username: String;
  email: String;
  password: String;
  teacherName:String;

  constructor(private validateService: ValidateService,
    private authService: AuthenticationService,
    private router: Router,
    private messages: FlashMessagesService,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      accountType: this.accountType,
      address: this.address,
      email: this.email,
      mobileNo: this.mobileNo,
      username: this.username,
      password: this.password,
      teacherName:this.teacherName
    };
    console.log( 'Submit button pressed' );
    // validating
    if (!this.validateService.validateRegister(user)) {
      this.messages.show( 'Fill in all fields', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
    }

    if (!this.validateService.validateEmail(this.email)) {
      this.messages.show( 'Enter valid email', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
    }
    if (!this.validateService.validatePhoneNo(this.mobileNo)) {
      this.messages.show( 'Enter valid phone number', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
    }
    console.log(user);

    // register user
    this.authService.registerUser(user).subscribe(data => {
      console.log('Trying to register');
      if (data.success) {
        this.messages.show(data.msg, {
          cssClass: 'alert-success',
          timeOut: 5000 });
        // this.router.navigate(['teachers']);
      } else {
        this.messages.show(data.msg, {
          cssClass: 'alert-danger',
          timeOut: 5000 });
      }
    });
  }

  // giving access only to the appropiate user
  onClickReg() {
    const type = localStorage.getItem('type');
    if ( type === 'Admin') {
      this.router.navigate(['accountRegister']);
      return true;
    }
    if ( type === 'Teacher') {
      this.router.navigate(['Home']);
      return false;
    }
    if ( type === 'Parent') {
      this.router.navigate(['Home']);
      return false;
    }
    this.router.navigate(['Home']);
    return false;
  }

  isParent(){
    console.log("is parent");
    if(this.accountType === "Parent"){
      return true;
    }else{
      return false;
    }
  }
}
