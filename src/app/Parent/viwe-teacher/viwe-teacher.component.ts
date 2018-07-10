import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ParentServicesService } from '../../services/parent-services.service';

@Component({
  selector: 'app-viwe-teacher',
  templateUrl: './viwe-teacher.component.html',
  styleUrls: ['./viwe-teacher.component.css']
})
export class ViweTeacherComponent implements OnInit {
    username : String;
    user :any;
    teacher : any;
    constructor(private authenticationService: AuthenticationService, private router: Router,private parentService: ParentServicesService) { }
  
    ngOnInit() {
      this.username = localStorage.getItem('username');
      console.log(this.username);

      this.parentService.getUser(this.username).subscribe(data => {
      console.log('Trying to get user');
      this.user=data;
        console.log('success');
        console.log(this.user,"================");

        this.parentService.viweTeacher(this.user.teacherName.toString()).subscribe(data=>{
          this.teacher = data[0];
          console.log(data[0]);
        });

    });
    
    this.parentService.viweTeacher(this.user.teacherName).subscribe(data=>{

      console.log(data);
    });
  }
  
}

