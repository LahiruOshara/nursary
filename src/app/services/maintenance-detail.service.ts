import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MaintenanceDetailService {

  form: any;

  constructor(private http: HttpClient) { }

  submitMaintenanceApplication(form): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/teachers/requestMaintenance', form, {headers: headers}) as Observable<RegularResponse>;
  }

  getMaintenanceApplication(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/teachers/requestMaintenance', {headers: headers}) as Observable<any>;
  }

}

interface RegularResponse {
  success: boolean;
  msg: string;
}




