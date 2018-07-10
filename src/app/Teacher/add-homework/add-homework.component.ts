import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import{ TeacherServiceService } from '../../services/teacher-service.service';
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
    private teacherService : TeacherServiceService
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  onFormSubmit(data) {
    const temp = {
      'teacherName' : data.username,
      'homeWork' : data.from,
      'dueDate' : data.dueDate
    };
    if(!this.validate.validatehomework(temp)){
      this.messages.show("Enter a address to request transport!",{
        cssClass : 'alert-success',
        timeOut:5000
      });
    }else{
    this.teacherService.addHW(temp).subscribe(data => {
      console.log('Trying to add homework');
      if (data.success) {
        console.log('success');
        this.messages.show("Home work added",{
          cssClass : 'alert-success',
          timeOut:5000
        });
        
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
