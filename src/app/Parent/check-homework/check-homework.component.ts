import { Component, OnInit } from '@angular/core';
import { ParentServicesService } from '../../services/parent-services.service';

@Component({
  selector: 'app-check-homework',
  templateUrl: './check-homework.component.html',
  styleUrls: ['./check-homework.component.css']
})
export class CheckHomeworkComponent implements OnInit {
  username : String;

  constructor(private parentService: ParentServicesService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
      console.log(this.username);

      this.parentService.getUser(this.username).subscribe(data => {
      
        

    });
  }

}
