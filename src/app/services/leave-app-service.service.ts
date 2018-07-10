import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeaveAppServiceService {

  form: any;

  constructor(private http: HttpClient) { }

  submitLeaveApplication(form): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/teachers/leaveApplication', form, {headers: headers}) as Observable<RegularResponse>;
  }

  getLeaveApplications(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    return this.http.get('http://localhost:4000/teachers/approveLeave', {headers: headers}) as Observable<any>;
 
  }
  returnedApprovedApplication(application:Application):Observable<RegularResponse>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/teachers/deleteApplication',application,{headers:headers}) as Observable<RegularResponse>
  }

}

interface RegularResponse {
  success: boolean;
  msg: string;
}

interface Application {
  username: string;
  edate: string;
  sdate: string;
  reason: string;
  accept:Boolean
}


interface Form {
  application: Object;
}



