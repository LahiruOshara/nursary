import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {firstName: String,
  middleName: String,
  lastName: String,
  accountType: String,
  address: String,
  mobileNo: String,
  username: String,
  email: String,
  password: String };
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.getProfile().subscribe(profile => {
      // console.log(profile.user);
      this.user = profile.user;
    }, error => {
        console.log(error);
        return false;
    });
  }

}
