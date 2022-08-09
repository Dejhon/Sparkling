import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/models/service';
import { DealsService } from 'src/app/Services/deals.service';

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {

  services!:Services[]

  constructor(private dealsService:DealsService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.dealsService.getAllServices().subscribe(
      allServices => this.services = allServices
    )
  }
}
