import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AdminLinkGuardService implements CanActivate  {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

    canActivate() {
      if (this.authenticationService.returnType() === 'Admin') {
        return true;
      } else {
        if (this.authenticationService.loggedIn())  {
          if (localStorage.getItem('type') === 'Teacher') {
            this.router.navigate(['/teachers']);
            return true;
          }
          if (localStorage.getItem('type') === 'Student') {
            this.router.navigate(['/students']);
            return true;
          }
        } else {
          this.router.navigate(['/accountLogIn']);
          return true;
        }
      }
    }
}
