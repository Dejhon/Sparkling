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

  getAllServices(): Observable<Services[]>{
    return this.services.get<Services[]>(this.REST_API_URL).pipe(
      tap((allServices: any) => console.log(`SUCCESSFULLY RETREIVED SERVICES`)),
      catchError(error => of([])),
    );
  }

  addService(data:object):Observable<Services>{
    return this.services.post<Services>(`${this.REST_API_URL}`, data).pipe(
      tap( serviceAdded => console.log(`SUCCESSFULLY ADDED SERVICE`)),
      catchError( error => of())
    );
  }

  getServiceByID(id: string):Observable<Services | any>{
    return this.services.get<Services>(`${this.REST_API_URL}/${id}`).pipe(
      tap(selectedService => console.log(`Service Retrieved By Id`)),
      catchError(error => of(new Services())),
    );
  }
  
  updateService(id: string, body:object): Observable<Services>{
    return this.services.put<Services>(`${this.REST_API_URL}/${id}`, body).pipe(
      tap(newData => console.log(`Service updated successfully`)),
      catchError(error => of(new Services())),
    );
  }

  deleteService(id:string):Observable<Services>{
    return this.services.delete<Services>(`${this.REST_API_URL}/${id}`).pipe(
      tap( deletedService => console.log(`Record Was Deleted`)),
      catchError( error => of())
    );
  }

  
}
