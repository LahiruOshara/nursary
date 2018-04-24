import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeaveAppServiceService {

  form: any;

  constructor(private http: HttpClient) { }

  submitLeaveApplication(form): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/teachers/leaveApplication', form, {headers: headers}) as Observable<RegularResponse>;
  }

  approveLeaveApplication(form): Observable<LeaveForm> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/teachers/leaveApplication', {headers: headers}) as Observable<LeaveForm>;
  }

}

interface RegularResponse {
  success: boolean;
  msg: string;
}

interface LeaveForm {
  username: string;
  sdate: string;
  edate: string;
  reason: string;
}



