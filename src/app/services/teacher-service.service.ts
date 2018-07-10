import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeacherServiceService {

  constructor( private http: HttpClient) { }
  addHW(home){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const res = this.http.post('http://localhost:4000/teacher/addhomework', home, {headers: headers}) as Observable<RegularResponse>;
    console.log(res);
    return res;

    
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}