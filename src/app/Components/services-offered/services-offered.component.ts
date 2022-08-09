import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/models/service';
import { DealsService } from 'src/app/Services/deals.service';

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.css']
})
export class ServicesOfferedComponent implements OnInit {

  services!: Services[];
  selected = this.services

  constructor(public route: Router, private dealsService:DealsService) { }

  // openDialog(element:object):void{
  //   this.dialog.open(BookingComponent,{
  //     width:'50%',
  //     height:'70%',
  //     data:{element
  //     }
  //   })  
  // }

  ngOnInit(): void {
    this.getServices();
  }

  moveToBooking(id:any){
    this.route.navigate(['booking/' + id]);    
  }

  getServices(){
    this.dealsService.getAllServices().subscribe(
      allServices => this.services = allServices
    )
  }

}
