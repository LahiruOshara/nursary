import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransferSalaryDetailsService {

  constructor(private http: HttpClient) { }

  getInfo(username): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // tslint:disable-next-line:max-line-length
    return this.http.post('users/salarySheet', {username: username}, {headers: headers}) as Observable<RegularResponse>;
  }
  submitMaintenanceApplication(form): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('teachers/salarySheet', form, {headers: headers}) as Observable<RegularResponse>;
  }
}


interface RegularResponse {
  success: boolean;
  msg: string;
}
// include the service from back end
