import { Component, OnInit, Input } from '@angular/core';
import {TEACHER} from '../teacher/teacher';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  @Input() teacher: TEACHER;
  constructor() { }

  ngOnInit() {
  }

}
