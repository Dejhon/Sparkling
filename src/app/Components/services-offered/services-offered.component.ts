import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.css']
})
export class ServicesOfferedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(BookingComponent,{
      width:'50%',
      height:'70%'
    })
  }

  ngOnInit(): void {
  }

}
