import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentInfoService {

  constructor(private http: HttpClient) { }
  // form should be json object
  getInfo(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('student/getStudentDetails', {headers: headers}) as Observable<any>;
  }
  postAttendanceInfo(form): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('teachers/markAttendance', form, {headers: headers}) as Observable<RegularResponse>;
  }

  getStudentList(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('student/studentList', {headers: headers});
  }
  // get the relevant students to mark the attendnce
  getReleventStudents(): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // tslint:disable-next-line:max-line-length
    return this.http.post('users/relevantUsers', { teacherName: localStorage.getItem('username'), accountType: 'parent' }, {headers: headers});
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}
