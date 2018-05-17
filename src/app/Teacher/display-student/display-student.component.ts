import { Component, OnInit } from '@angular/core';
import { StudentInfoService} from '../../services/student-info.service';
@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  studentList: any;
  constructor(private infoService: StudentInfoService) { }

  ngOnInit() {
    this.infoService.getInfo().subscribe(data => {
      this.studentList = data;
      console.log(data);
    }, error => {
        console.log(error);
        return false;
    });
  }

}
