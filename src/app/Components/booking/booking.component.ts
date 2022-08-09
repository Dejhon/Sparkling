import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Services } from 'src/app/models/service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  services!:Services[]

  constructor() {}

  ngOnInit(): void {    
  }
  

  bookingForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/)]),
    address: new FormControl('', Validators.required),
    squareFeet: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    serviveCost: new FormControl( '', Validators.required),
  })

  get name(){
    return this.bookingForm.get('name')
  }

  get email(){
    return this.bookingForm.get('email')
  }

  get address(){
    return this.bookingForm.get('address')
  }

  get squareFeet(){
    return this.bookingForm.get('squareFeet')
  }

  get service(){
    return this.bookingForm.get('service')
  }

  get serviceCost(){
    return this.bookingForm.get('serviceCost')
  }

  onSubmit(){}
  
}
