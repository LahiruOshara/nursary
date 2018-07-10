import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  getAuthenticationService() {
    return this.authenticationService;
  }

  onLogoutClick() {
    this.authenticationService.logOut();
    // this.messages.show('You are logged out', {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['accountLogIn']);
    return false;
  }
  onClickHome() {
    const type = localStorage.getItem('type');
    if ( type === 'Admin') {
      this.router.navigate(['admin']);
      return true;
    }
    if ( type === 'Teacher') {
      this.router.navigate(['teachers']);
      return true;
    }
    if ( type === undefined) {
      this.router.navigate(['/']);
      return false;
    }
  }

}
