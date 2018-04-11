import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { LeaveAppServiceService } from '../../services/leave-app-service.service';
import { teacher } from '../mock-teacher';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})

export class LeaveApplicationComponent implements OnInit {
  username: String;
  sdate: String;
  edate: String;
  reason: String;

  constructor(private validateService: ValidateService,
    private messages: FlashMessagesService,
    private leaveAppService: LeaveAppServiceService,
    private router: Router
  ) { }
  ngOnInit() {
  }

  onFormSubmit() {
    const leaveApplication = {
      username: this.username,
      sdate: this.sdate,
      edate: this.edate,
      reason: this.reason
    };

    if (!this.validateService.validateLeaveForm(leaveApplication)) {
      this.messages.show( 'Enter Details', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
    }

    console.log(leaveApplication);

    this.leaveAppService.submitLeaveApplication(leaveApplication ).subscribe(data => {
      console.log('Trying to register');
      if (data.success) {
          // sconsole.log(data.msg);
          this.router.navigate(['teachers']);

      } else {
        this.messages.show( data.msg, {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      }
    });
  }


  }
