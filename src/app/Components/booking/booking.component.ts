import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/Services/booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bookings } from 'src/app/models/booking';
import { DealsService } from 'src/app/Services/deals.service';
import { Services } from 'src/app/models/service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @ViewChild('cost') cost!: ElementRef
  selectedId : string  = this.activateRoute.snapshot.params['id'];
  serviceSelected!: Services;
  bookingForm!: FormGroup;
  cardForm!:FormGroup
  serviceAmount = 0;
  isEditable = false;

  constructor(private activateRoute:ActivatedRoute, private dealsService:DealsService,
              private bookingService: BookingService  
             ) {}

  ngOnInit(): void {    
    this.getServiceId();
    this.cardForm = new FormGroup({
      cardNumber: new FormControl('',Validators.required),
      monthExpire: new FormControl('',Validators.required),
      yearExpire: new FormControl('',Validators.required),
      cvv: new FormControl('', Validators.required)
    }) 
  }

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

  get serviceCharge(){
    return this.bookingForm.get('serviceCharge')
  }

  getServiceId(){
    this.dealsService.getServiceByID(this.selectedId).subscribe((serviceSelect) => {
      this.serviceSelected = serviceSelect[0]   
      this.serviceAmount = this.serviceSelected.serviceCost;
      this.bookingForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/)]),
        address: new FormControl('', Validators.required),
        squareFeet: new FormControl(''),
        service: new FormControl(this.serviceSelected.name, Validators.required),
        serviceCharge: new FormControl((this.serviceAmount)),
      })     
    }) 
  }

  onChange(){
    let charge = this.serviceAmount * this.bookingForm.get("squareFeet")?.value 
    this.bookingForm.get("serviceCharge")?.setValue(charge)
  }

  onSubmit(body:object){
    if(this.bookingForm?.invalid){
      alert('Please Fill Out Form')
    }else{
      this.bookingService.addReservation(body).subscribe({
        next:(res)=>{
        },
        error:(err)=>{
          console.log(err);          
        }
      })
    }
  }
  
}

