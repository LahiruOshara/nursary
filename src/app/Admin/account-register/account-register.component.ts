import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';


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

  constructor(private validateService: ValidateService,
    private authService: AuthenticationService,
    private router: Router
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
      password: this.password
    };
    console.log( 'Submit button pressed' );
    // validating
    if (!this.validateService.validateRegister(user)) {
      console.log('fill in all fields');
      return false;
    }

    if (!this.validateService.validateEmail(this.email)) {
      console.log('enter valid email');
      return false;
    } else {
      console.log(user);
    }

    // register user
    this.authService.registerUser(user).subscribe(data => {
      console.log('Trying to register');
      if (data.success) {
        console.log('Successfully registered');
        this.router.navigate(['teachers']);
      } else {
        console.log(data);
        console.log('Something went wrong');
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
    /*if ( type === 'Student') {
      this.router.navigate(['Home']);
      return false;
    }*/
    return false;
  }
}
