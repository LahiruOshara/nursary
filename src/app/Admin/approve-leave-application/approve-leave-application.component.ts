import { Component, OnInit } from '@angular/core';
import { LeaveAppServiceService} from '../../services/leave-app-service.service';

@Component({
  selector: 'app-approve-leave-application',
  templateUrl: './approve-leave-application.component.html',
  styleUrls: ['./approve-leave-application.component.css']
})
export class ApproveLeaveApplicationComponent implements OnInit {
  applications: any;
  constructor(private leaveAppService: LeaveAppServiceService) { }

  ngOnInit() {
    this.leaveAppService.getLeaveApplications().subscribe(data => {
      this.applications = data.applications;
    }, error => {
        console.log(error);
        return false;
    });
  }

}
