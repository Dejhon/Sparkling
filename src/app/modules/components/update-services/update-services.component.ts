import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DealsService } from 'src/app/Services/deals.service';
import { Services } from 'src/app/models/service';

@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrls: ['./update-services.component.css']
})
export class UpdateServicesComponent implements OnInit {

  selectedId : string  = this.activateRoute.snapshot.params['id'];
  service!: Services;
  updateServiceForm!: FormGroup;

  constructor(private route: Router, private dealsService:DealsService, private activateRoute:ActivatedRoute) { }

  getServiceId(){
    this.dealsService.getServiceByID(this.selectedId).subscribe((serviceEdit) => {
      this.service = serviceEdit[0]    
      console.log(this.service);        
      this.updateServiceForm = new FormGroup({
        name: new FormControl(serviceEdit[0].name),
        description: new FormControl(serviceEdit[0].description),
        serviceCost: new FormControl(serviceEdit[0].serviceCost),
      })      
    }) 
  }

  // get name(){
  //   return this.updateServiceForm.get('name')
  // }
  // get description(){
  //   return this.updateServiceForm.get('description')
  // }
  // get serviceCost(){
  //   return this.updateServiceForm.get('serviceCost')
  // }

  update(body:object){
    if(window.confirm("Confirm Update")){
      this.dealsService.updateService(this.selectedId , body).subscribe({
        next: (res) => {
        },
        error: () => {
          console.log(`Error while updating record`);
        },
        complete: () => {
          this.route.navigate(['/profile/view-services']);
        }
       })
    }
  }

  ngOnInit(): void {
    this.getServiceId();
  }

}
