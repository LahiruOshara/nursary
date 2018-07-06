import { Component, OnInit } from '@angular/core';
import { LeaveAppServiceService} from '../../services/leave-app-service.service';

@Component({
  selector: 'app-approve-leave-application',
  templateUrl: './approve-leave-application.component.html',
  styleUrls: ['./approve-leave-application.component.css']
})
export class ApproveLeaveApplicationComponent implements OnInit {
  applications: any;
  selectedApplication: any;
  constructor(private leaveAppService: LeaveAppServiceService) { }

  ngOnInit() {
    this.leaveAppService.getLeaveApplications().subscribe(data => {
      this.applications = data.applications;
    }, error => {
        console.log(error);
        return false;
    });
  }

  onSelect(application: Application): void {
    console.log(application);
    this.selectedApplication = application;
   // console.log(this.selectedApplication);
  }

  onFormSubmit() {
    return true;
  }

}


interface Application {
  username: string;
  edate: string;
  sdate: string;
  reason: string;
}
