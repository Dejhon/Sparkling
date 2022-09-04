import { Injectable } from '@angular/core';
import { Assessment } from '../models/assess';
import { catchError, map, tap } from 'rxjs';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessService {

  REST_API_URL = 'http://localhost:3000/sparkling/assessment'


  constructor(private assessService:HttpClient) { }

  getAllAssessment(): Observable<Assessment[]>{
    return this.assessService.get<Assessment[]>(this.REST_API_URL).pipe(
      tap((allAssessment: any) => console.log(`successfully retrieved Assessment`)),
      catchError(error => of([])),
    );
  }

  addAssessment(data:object):Observable<Assessment>{
    return this.assessService.post<Assessment>(`${this.REST_API_URL}`, data).pipe(
      tap( serviceAdded => console.log(`Successfully booked an assessment`)),
      catchError( error => of())
    );
  }

  getAssessmentById(id: string):Observable<Assessment | any>{
    return this.assessService.get<Assessment>(`${this.REST_API_URL}/${id}`).pipe(
      tap(selectedService => console.log(`Assessment retrieved By Id`)),
      catchError(error => of(new Assessment())),
    );
  }
  
  updateAssessment(id: string, body:object): Observable<Assessment>{
    return this.assessService.put<Assessment>(`${this.REST_API_URL}/${id}`, body).pipe(
      tap(newData => console.log(`Reservation updated successfully`)),
      catchError(error => of(new Assessment())),
    );
  }

  removeAssessment(id:string):Observable<Assessment>{
    return this.assessService.delete<Assessment>(`${this.REST_API_URL}/${id}`).pipe(
      tap( assessmentRemoved => console.log(`Assessment Was removed`)),
      catchError( error => of())
    );
  }
}
