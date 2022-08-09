import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Services } from 'src/app/models/service';
import { DealsService } from 'src/app/Services/deals.service';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.css']
})
export class ServicesOfferedComponent implements OnInit {

  services!: Services[]

  constructor(public dialog: MatDialog, private dealsService:DealsService) { }

  openDialog(){
    this.dialog.open(BookingComponent,{
      width:'50%',
      height:'70%'
    })
  }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.dealsService.getAllServices().subscribe(
      allServices => this.services = allServices
    )
  }

}
