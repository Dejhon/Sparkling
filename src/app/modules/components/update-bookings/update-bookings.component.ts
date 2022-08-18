import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/models/booking';
import { BookingService } from 'src/app/Services/booking.service';
@Component({
  selector: 'app-update-bookings',
  templateUrl: './update-bookings.component.html',
  styleUrls: ['./update-bookings.component.css']
})
export class UpdateBookingsComponent implements OnInit {

  booking!:Bookings;
  selectedId : string  = this.activateRoute.snapshot.params['id'];
  updateBooking!:FormGroup

  constructor(private activateRoute:ActivatedRoute,private route:Router, private bookingService:BookingService) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.bookingService.getReservationById(this.selectedId).subscribe((Booking) => {
      this.booking = Booking[0]
      this.updateBooking = new FormGroup({
        status: new FormControl(this.booking.status,Validators.required)
      });
     });
  }

  get status(){
    return this.updateBooking.get('status');
  }

  submit(body:object){
    this.bookingService.updateReservation(this.selectedId, body).subscribe({
      next:()=>{
        alert('Booking status updated')
        this.route.navigate(['/profile/bookings'])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
