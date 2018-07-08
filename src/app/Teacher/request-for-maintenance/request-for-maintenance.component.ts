import { Component, OnInit } from '@angular/core';
import { MaintenanceRequestForm} from './maintenance-request-form';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import {MaintenanceDetailService} from '../../services/maintenance-detail.service';
@Component({
  selector: 'app-request-for-maintenance',
  templateUrl: './request-for-maintenance.component.html',
  styleUrls: ['./request-for-maintenance.component.css']
})
export class RequestForMaintenanceComponent implements OnInit {
   
   name: string;
   briefDescription: string;
   maintenanceApplication:MaintenanceRequestForm
  
  constructor(private validateService: ValidateService,
    private messages: FlashMessagesService,
    private maintenanceDetailService:MaintenanceDetailService,
  ) { }


  ngOnInit() {
    this.name=localStorage.getItem("username");
   
  }
  onFormSubmit() {
    this.maintenanceApplication = new MaintenanceRequestForm( this.name,this.briefDescription );


    if (!this.validateService.validateLeaveForm(this.maintenanceApplication)) {
      this.messages.show( 'Enter Details', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
        // console.log('date not valid');
      return false;
    }


    
    //console.log('application validated');
    this.maintenanceDetailService.submitMaintenanceApplication(this.maintenanceApplication).subscribe(data => {
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





