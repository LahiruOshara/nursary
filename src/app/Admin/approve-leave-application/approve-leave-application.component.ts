import { Component, OnInit } from '@angular/core';
import { LeaveAppServiceService} from '../../services/leave-app-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-leave-application',
  templateUrl: './approve-leave-application.component.html',
  styleUrls: ['./approve-leave-application.component.css']
})
export class ApproveLeaveApplicationComponent implements OnInit {
  applications: Application[]
 selectedApplication: Application
  approvedApplication:Application
  constructor(private leaveAppService: LeaveAppServiceService,
  private messages:FlashMessagesService,
private router:Router) { }

  ngOnInit() {
 
    this.getApplications();
   

  }
  //get leave application
  getApplications(){
    
    this.leaveAppService.getLeaveApplications().subscribe(data => {
      this.applications = data;
      console.log(data)
    }, error => {
        console.log(error);
        return false;
    });

    console.log(this.applications);
    
  }

  //approve leave application
  approveleaveApplication(application:Application){
  

    this.leaveAppService.returnedApprovedApplication(application).subscribe(data=>{
       // console.log('Trying to register');
       if (data.success) {
        this.messages.show( 'Submited', {
          cssClass: 'alert-success',
          timeOut: 300 });
          return true;

      } else {
        this.messages.show( data.msg, {
        cssClass: 'alert-danger',
        timeOut: 5000 });
        return false;
      }

  
    });
   
    this.selectedApplication=null
    this.router.navigate(['admin']);//reload the page again

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
  accept:Boolean
}
