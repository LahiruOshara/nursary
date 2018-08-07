import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeclaareHolidayService {
  form: any;

  constructor(private http: HttpClient) { }

  submit(holiday): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('teachers/holiday', holiday, {headers: headers}) as Observable<RegularResponse>;
  }

  getHolidays(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('teachers/holidayDec', {headers: headers}) as Observable<any>;
  }

}

interface RegularResponse {
  success: boolean;
  msg: string;
}
