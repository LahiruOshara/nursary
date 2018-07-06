import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentInfoService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/student/getStudentDetails', {headers: headers}) as Observable<any>;
  }

}
