import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/Services/message.service';
import { BookingService } from 'src/app/Services/booking.service';
import { Messages } from 'src/app/models/message';
import { Bookings } from 'src/app/models/booking';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  total:number = 0;
  totalBookings = 0
  bookings!:Bookings[];
  messages!:Messages[];

  constructor(private route:Router, private messageService:MessageService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getNumberofMessages();
    this.getNumberofBookings();
  }

  getNumberofMessages(): any{
    this.messageService.getAllMessages().subscribe((res)=> {
      this.messages = res;
      this.messages.forEach(element => {
        if(element.status == "unread"){
          this.total ++;
        }        
      });

    })
  }

  getNumberofBookings(){
    this.bookingService.getAllBookings().subscribe((res)=>{
      this.bookings = res;
      this.bookings.forEach(ele =>{
        if(ele.status == 'incompleted'){
          this.totalBookings ++;
        }
      })
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/home'])
  }


  

}
