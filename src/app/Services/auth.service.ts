import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../models/Users';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API_URL = 'http://localhost:3000/sparkling/authentication'

  constructor(private auth:HttpClient) { }

  loginUser(data:any):Observable<Users>{
    return this.auth.post<Users>(`${this.REST_API_URL}`, data).pipe(
      tap( userLoggedIn => console.log(`This user Logged In  ${JSON.stringify(userLoggedIn)}`)),
      catchError( error => of())
    );
  }

}
