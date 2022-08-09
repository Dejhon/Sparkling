import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/models/service';
import { DealsService } from 'src/app/Services/deals.service';

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {

  services!:Services[]

  constructor(private dealsService:DealsService, private route:Router) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.dealsService.getAllServices().subscribe(
      allServices => this.services = allServices
    )
  }

  moveToUpdate(id:any){
    this.route.navigate(['/profile/updateServices/' + id]);
  }

  deleteRecord(id:string):void {
    this.dealsService.deleteService(id).subscribe({
      next: () => {
      },
      error: () => {
        alert('Error While Deleting Record');
      },
      complete: () => {
        this.getServices();
      }
    })
  };
}
