import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookings } from '../models/booking';
import { catchError, map, tap } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  REST_API_URL = 'http://localhost:3000/sparkling/bookings'


  constructor(private bookingService:HttpClient) { }

  
  getAllBookings(): Observable<Bookings[]>{
    return this.bookingService.get<Bookings[]>(this.REST_API_URL).pipe(
      tap((allBookings: any) => console.log(`SUCCESSFULLY RETREIVED Bookings`)),
      catchError(error => of([])),
    );
  }

  addReservation(data:object):Observable<Bookings>{
    return this.bookingService.post<Bookings>(`${this.REST_API_URL}`, data).pipe(
      tap( serviceAdded => console.log(`SUCCESSFULLY ADDED RESERVATION`)),
      catchError( error => of())
    );
  }

  getReservationById(id: string):Observable<Bookings | any>{
    return this.bookingService.get<Bookings>(`${this.REST_API_URL}/${id}`).pipe(
      // tap(selectedService => console.log(`selected student = ${JSON.stringify(JSON.parse(selectedService))}`)),
      tap(selectedService => console.log(`Reservation Retrieved By Id`)),
      catchError(error => of(new Bookings())),
    );
  }
  
  updateReservation(id: string, body:object): Observable<Bookings>{
    return this.bookingService.put<Bookings>(`${this.REST_API_URL}/${id}`, body).pipe(
      tap(newData => console.log(`Reservation updated successfully`)),
      catchError(error => of(new Bookings())),
    );
  }

  cancelReservation(id:string):Observable<Bookings>{
    return this.bookingService.delete<Bookings>(`${this.REST_API_URL}/${id}`).pipe(
      tap( deletedService => console.log(`Reservation Was cancelled`)),
      catchError( error => of())
    );
  }

}