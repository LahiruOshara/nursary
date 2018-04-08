import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  token: any;
  user: any;

  constructor(private http: HttpClient) {
  }

  registerUser(user): Observable<RegisterResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/users/register', user, {headers: headers}) as Observable<RegisterResponse>;
  }

  authenticateUser(user) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // console.log('auth service:' + headers.get('Content-Type'));
    return this.http.post('http://localhost:4000/users/authenticate', user, {headers: headers}) as Observable<AuthenticateResponse>;
  }

  getProfile() {
    // tslint:disable-next-line:prefer-const
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loadToken()}` );
    // console.log(`Bearer ${this.loadToken()}`);
    console.log('auth service');
    // headers.set('Content-Type', 'application/json');
    console.log('auth service:' + headers.get('Authorization'));
    return this.http.get('http://localhost:4000/users/profile', {headers: headers}) as Observable<ProfileResponse>;
  }

  storeUserdata(token, user) {
    localStorage.setItem('id_token', token);
    // console.log(token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.token = token;
    // console.log(token);
    return token;
  }

  logOut() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }
}


interface RegisterResponse {
  success: boolean;
  msg: string;
}

interface AuthenticateResponse {
  success: boolean;
  token: string;
  user: any;
  msg: string;
}

interface ProfileResponse {
  user: any;
}
