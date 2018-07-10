import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import {MaintenanceDetailService} from '../../services/maintenance-detail.service';
@Component({
  selector: 'app-request-for-maintenance',
  templateUrl: './request-for-maintenance.component.html',
  styleUrls: ['./request-for-maintenance.component.css']
})
export class RequestForMaintenanceComponent implements OnInit {
   
   username: string;
   briefDescription: string;
 
  
  constructor(private validateService: ValidateService,
    private messages: FlashMessagesService,
    private maintenanceDetailService:MaintenanceDetailService,
  ) { }


  ngOnInit() {
    this.username=localStorage.getItem("username");
   
  }
  onFormSubmit() {
    console.log(this.briefDescription)
    let application={
      username:this.username,
      briefDescription:this.briefDescription
    }

  if (!this.validateService.validateMaintananceForm(application)) {
      this.messages.show( 'Enter Details', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
        // console.log('date not valid');
      return false;
    }


    
    //console.log('application validated');
    this.maintenanceDetailService.submitMaintenanceApplication(application).subscribe(data => {
      // console.log('Trying to register');
      if (data.success) {
        // console.log(data.msg);
        this.messages.show( 'Submited', {
          cssClass: 'alert-success',
          timeOut: 300 });
          // this.router.navigate(['teachers']);

      } else {
        this.messages.show( data.msg, {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      }
    });
  }

}





