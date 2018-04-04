import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  token:any;
  user:any;

  constructor(private http:HttpClient) { 
  }
 
  registerUser(user):Observable<RegisterResponse>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://localhost:4000/users/register',user,{headers:headers}) as Observable<RegisterResponse>;      
  }


}


interface RegisterResponse{
  success:boolean,
  msg:String
}

interface AuthenticateResponse{
  success:boolean,
  token:String,
  user:any,
  msg:string
}
