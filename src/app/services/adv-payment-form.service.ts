import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdvPaymentFormService {
  form: any;

  constructor(private http: HttpClient) { }

  submitAdvPaymentForm(form): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/teachers/advPayment', form, {headers: headers}) as Observable<RegularResponse>;
  }

  getAdvPaymentForm(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/teachers/approveLeave', {headers: headers}) as Observable<any>;
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

interface Form {
  application: Object;
}
