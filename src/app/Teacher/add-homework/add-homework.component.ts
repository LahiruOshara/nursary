import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.component.html',
  styleUrls: ['./add-homework.component.css']
})
export class AddHomeworkComponent implements OnInit {
  username:String;
  constructor(
    private validate : ValidateService,
    private router : Router,
    private messages: FlashMessagesService,
    private parentService: ParentServicesService
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  onFormSubmit(from) {
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
