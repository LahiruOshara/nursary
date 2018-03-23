import { Injectable } from '@angular/core';
import {teacher} from '../mock-teacher';
import {TEACHER} from './teacher';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class TeacherService {

  constructor() { }
  getTeachers(): Observable<TEACHER[]>{
    return of (teacher);
  }

}
