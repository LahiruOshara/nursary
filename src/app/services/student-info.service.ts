import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentInfoService {

  constructor(private http: HttpClient) { }
  //form should be json object
  getInfo(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/student/getStudentDetails', {headers: headers}) as Observable<any>;
  }
  postAttendanceInfo(form): Observable<RegularResponse> {
    const headers= new HttpHeaders().set('content-type','application/json');
    return this.http.post('http://localhost:4000/teachers/markAttendance',form,{headers:headers}) as Observable<RegularResponse>;
  }
  
  getStudentList():Observable<any>{
    const headers=new HttpHeaders().set('Content-Type','application/json');
    return this.http.get('http://localhost:4000/student/studentList',{headers:headers});
  }
  // get the relevant students to mark the attendnce
  getReleventStudents():Observable<any>{
   
    const headers=new HttpHeaders().set('Content-Type','application/json');
   
    return this.http.post('http://localhost:4000/users/relevantUsers',{ teacherName:localStorage.getItem('username'),accountType:"parent" },{headers:headers});
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}