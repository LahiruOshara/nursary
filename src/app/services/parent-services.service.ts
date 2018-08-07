
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ParentServicesService {

  username: any;

  constructor(private http: HttpClient) { }

  submitTr(username): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const res = this.http.post('parent/transportReq', username, {headers: headers}) as Observable<RegularResponse>;
    console.log(res);
    return res;
  }

  getHolidays(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('teachers/holidayDec', {headers: headers}) as Observable<any>;
  }

  getUser(username): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post('parent/getUsers', {'username': username}, {headers: headers}) as Observable<any>;
  }

  viweTeacher(username) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // tslint:disable-next-line:max-line-length
    const resu = this.http.post('parent/viweTeacher', {username : username , accountType : 'Teacher'} , {headers: headers}) as Observable<any>;
    console.log(resu);
    return resu;
  }

  getHW(teacherName) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const resu = this.http.post('parent/checkHomework', {teacherName : teacherName} , {headers: headers}) as Observable<any>;
    console.log(resu);
    return resu;
  }
}



interface RegularResponse {
  success: boolean;
  msg: string;
}
