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
  homework : String;
  dueDate : String;
  constructor(
    private validate : ValidateService,
    private router : Router,
    private messages: FlashMessagesService,
    private teacherService : TeacherServiceService
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  onFormSubmit() {
    console.log();
    const temp = {
      'teacherName' : this.username,
      'homeWork' : this.homework,
      'dueDate' : this.dueDate
    };
    console.log(temp);
    if(!this.validate.validatehomework(temp)){
      console.log(temp);
      this.messages.show("Enter a valid homework details",{
        cssClass : 'alert-danger',
        timeOut:5000
      });
    }else{
      console.log(temp);
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
