import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class GuardService implements CanActivate  {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

    canActivate() {
      if (this.authenticationService.loggedIn()) {
        return true;
      } else {
        this.router.navigate(['/accountLogIn']);
        return true;
      }
    }
}
