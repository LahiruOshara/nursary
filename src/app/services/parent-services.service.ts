
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ParentServicesService {

  username: any;

  constructor(private http: HttpClient) { }

  submitTr(username): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const res = this.http.post('http://localhost:4000/parent/transportReq', username, {headers: headers}) as Observable<RegularResponse>;
    console.log(res);
    return res;
  }

  getHolidays(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/teachers/holidayDec', {headers: headers}) as Observable<any>;
  }

  getUser(username):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    return this.http.post('http://localhost:4000/parent/getUsers',{'username':username},{headers:headers}) as Observable<any>;
  }

  viweTeacher(username){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    let resu = this.http.post('http://localhost:4000/parent/viweTeacher', {username : username , accountType : "Teacher"} ,{headers: headers}) as Observable<any>;
    console.log(resu);
    return resu;
  }

  getHW(teacherName){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    let resu = this.http.post('http://localhost:4000/parent/checkHomework', {teacherName : teacherName} ,{headers: headers}) as Observable<any>;
    console.log(resu);
    return resu;
  }
}



interface RegularResponse {
  success: boolean;
  msg: string;
}
