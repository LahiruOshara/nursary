import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TeacherLinkGuardService {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

    canActivate() {
      if (this.authenticationService.returnType() === 'Teacher') {
        return true;
      } else {
        if (this.authenticationService.loggedIn())  {
          if (localStorage.getItem('type') === 'Admin') {
            this.router.navigate(['/admin']);
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
