import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authenticationService.authenticateUser(user).subscribe(data => {
      // console.log(data);
      if (data.success) {
        this.authenticationService.storeUserdata(data.token, data.user);
        this.router.navigate(['teachers']);
      } else {
        this.messages.show(data.msg, {
          cssClass: 'alert-danger',
          timeOut: 5000 });
      }
    });
  }
}
