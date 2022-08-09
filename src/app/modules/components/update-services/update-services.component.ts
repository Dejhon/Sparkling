import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DealsService } from 'src/app/Services/deals.service';

@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrls: ['./update-services.component.css']
})
export class UpdateServicesComponent implements OnInit {

  constructor(private route: Router, private dealsService:DealsService) { }

  addServiceForm = new FormGroup({
    sName: new FormControl('',Validators.required),
    sDescription: new FormControl('', Validators.required),
    sCost: new FormControl('', Validators.required),
  })

  get sName(){
    return this.addServiceForm.get('sName');
  }

  get sDescription(){
    return this.addServiceForm.get('sDescription');
  }

  get sCost(){
    return this.addServiceForm.get('sCost');
  }

  ngOnInit(): void {
  }

}
