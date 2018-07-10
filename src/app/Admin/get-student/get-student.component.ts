import { Component, OnInit } from '@angular/core';
import { StudentInfoService} from '../../services/student-info.service';
@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {
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
