import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/models/booking';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings!:Bookings[];
  searchText:any = '';
  booking!:Bookings
  found = false;

  constructor(private bookingService:BookingService, private route:Router, private dialog:MatDialog) { }

  getAllBookings(){
    this.bookingService.getAllBookings().subscribe(allBookings => this.bookings = allBookings)
  }

  // isFound():any{
  //   this.bookingService.getAllBookings().subscribe((allBookings) => {
  //     this.bookings = allBookings;
  //     this.bookings.forEach(ele=>{
  //       if(this.searchText == ele.name){
  //         this.found = true;
  //       } else{
  //         this.found = false
  //       }
  //       console.log(this.found); 
  //         return (this.found)       
  //     })
  //   })
  // }

  moveToUpdate(id:any){
    this.route.navigate(['/profile/updateBookings/' + id]);
  }

  cancelBooking(id:any){
    if( window.confirm('THIS BOOKING WILL BE DELETED')){
      this.bookingService.cancelReservation(id).subscribe({
        next:() =>{
          alert('Booking Deleted')
          this.getAllBookings();
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
  }

  ngOnInit(): void {
    this.getAllBookings();
  }

}
