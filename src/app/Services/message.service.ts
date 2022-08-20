import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messages } from '../models/message';
import { catchError, map, tap } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  REST_API_URL = 'http://localhost:3000/sparkling/messages'


  constructor(private messageService:HttpClient) { }

  
  getAllMessages(): Observable<Messages[]>{
    return this.messageService.get<Messages[]>(this.REST_API_URL).pipe(
      tap((allMessages: any) => console.log(`SUCCESSFULLY RETREIVED Messages`)),
      catchError(error => of([])),
    );
  }

  addMessage(data:object):Observable<Messages>{
    return this.messageService.post<Messages>(`${this.REST_API_URL}`, data).pipe(
      tap( messageSent => console.log(`SUCCESSFULLY SENT MESSAGE`)),
      catchError( error => of())
    );
  }

  getMessageById(id: string):Observable<Messages | any>{
    return this.messageService.get<Messages>(`${this.REST_API_URL}/${id}`).pipe(
      // tap(selectedService => console.log(`selected student = ${JSON.stringify(JSON.parse(selectedService))}`)),
      tap(selectedMessage => console.log(`MESSAGE RETRIEVED BY ID`)),
      catchError(error => of(new Messages())),
    );
  }
  
  updateMessage(id: string, body:object): Observable<Messages>{
    return this.messageService.patch<Messages>(`${this.REST_API_URL}/${id}`, body).pipe(
      tap(newData => console.log(`STATUS UPDATED SUCCESSFULLY`)),
      catchError(error => of(new Messages())),
    );
  }

  deleteMessage(id:string):Observable<Messages>{
    return this.messageService.delete<Messages>(`${this.REST_API_URL}/${id}`).pipe(
      tap( deletedMessage => console.log(`MESSAGE WAS DELETD`)),
      catchError( error => of())
    );
  }

}
