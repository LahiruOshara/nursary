import { Component, OnInit } from '@angular/core';
import {TEACHER} from './teacher';
import {TeacherService} from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {
  selectedTeacher: TEACHER;
  teachers: TEACHER[];


  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.getTeachers();
  }

  onSelect( steacher: TEACHER ): void{
    this.selectedTeacher = steacher;
  }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }

}
