import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../models/Users';
import { catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API_URL = environment.REST_API_URL  + '/authentication'

  constructor(private auth:HttpClient) { }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  loginUser(data:object):Observable<Users>{
    return this.auth.post<Users>(`${this.REST_API_URL}`, data).pipe(
      tap( userLoggedIn => console.log(`Logged In`)),
      catchError( error => of())
    );
  }

}
