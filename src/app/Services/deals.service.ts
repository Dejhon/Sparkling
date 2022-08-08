import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from '../models/service';
import { catchError, map, tap } from 'rxjs';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DealsService {

  REST_API_URL = 'http://localhost:3000/sparkling/services'

  constructor(private services: HttpClient) { }

  getAllServices(){}

  addService(data:object):Observable<Services>{
    return this.services.post<Services>(`${this.REST_API_URL}`, data).pipe(
      tap( serviceAdded => console.log(`${JSON.stringify(serviceAdded)}`)),
      catchError( error => of())
    );
  }
  
}
