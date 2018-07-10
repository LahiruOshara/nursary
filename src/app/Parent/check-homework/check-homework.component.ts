import { Component, OnInit } from '@angular/core';
import { ParentServicesService } from '../../services/parent-services.service';

@Component({
  selector: 'app-check-homework',
  templateUrl: './check-homework.component.html',
  styleUrls: ['./check-homework.component.css']
})
export class CheckHomeworkComponent implements OnInit {
  username : String;
  user:any;
  homework:any;
  constructor(private parentService: ParentServicesService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
      console.log(this.username);

      this.parentService.getUser(this.username).subscribe(data => {
      console.log('Trying to get user');
      this.user=data;
        console.log('success');
        this.parentService.getHW(this.user.teacherName).subscribe(home=>{
          this.homework = home;
        });

    });
  }

}
