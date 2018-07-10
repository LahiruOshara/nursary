import { Component, OnInit } from '@angular/core';
import { ParentServicesService } from '../../services/parent-services.service';
import { AdvPaymentFormService } from '../../services/adv-payment-form.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-apply-transport',
  templateUrl: './apply-transport.component.html',
  styleUrls: ['./apply-transport.component.css']
})
export class ApplyTransportComponent implements OnInit {
  username: String;
  from: String;
  constructor(
    private validate : ValidateService,
    private router : Router,
    private messages: FlashMessagesService,
    private parentService: ParentServicesService
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  onFormSubmit() {
    const temp = {
      'username' : this.username,
      'from' : this.from
    };
    /*console.log(temp);
    const res = this.parentService.submitTr(temp);
    console.log('here');
    console.log(res);*/
    if(!this.validate.validateTrasportRequest(temp)){
      this.messages.show("Enter a address to request transport!",{
        cssClass : 'alert-success',
        timeOut:5000
      });
    }else{
    this.parentService.submitTr(temp).subscribe(data => {
      console.log('Trying to register');
      if (data.success) {
        console.log('success');
        this.messages.show("Transport request sent!",{
          cssClass : 'alert-success',
          timeOut:5000
        });
        this.router.navigate(['applyTransport']);
        /*this.messages.show( 'Successfully Declared', {
          cssClass: 'alert-success',
          timeOut: 5000 });
        // this.router.navigate(['teachers']);*/
      } else {
        console.log(data);
        console.log('Something went wrong');
      }
    });
  }
  }
}
