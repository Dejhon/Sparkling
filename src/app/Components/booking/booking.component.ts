import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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

  @ViewChild('sectionA') sectionA!:ElementRef
  @ViewChild('sectionB') sectionB!:ElementRef

  selectedId : string  = this.activateRoute.snapshot.params['id'];
  serviceSelected!: Services;
  bookingForm!: FormGroup;
  serviceAmount = 0;
  cardRegex:any = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/
  

  constructor(private activateRoute:ActivatedRoute, private dealsService:DealsService,private bookingService: BookingService) {}

  ngOnInit(): void {    
    this.getServiceId();
  }

  toggleDisplay(){
    this.sectionA.nativeElement.style.display = 'none'
    this.sectionB.nativeElement.style.display = 'block'
  }

  toggleDisplay2(){
    this.sectionA.nativeElement.style.display = 'block'
    this.sectionB.nativeElement.style.display = 'none'
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
        serviceCharge: new FormControl('', Validators.required),
        cardNumber: new FormControl('',Validators.required),
        monthExpire: new FormControl('',Validators.required),
        yearExpire: new FormControl('',Validators.required),
        cvv: new FormControl('', Validators.required)
        })          
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

  get cardNumber(){
    return this.bookingForm.get('cardNumber')
  }

  get monthExpire(){
    return this.bookingForm.get('monthExpire')
  }

  get yearExpire(){
    return this.bookingForm.get('yearExpire')
  }

  get cvv(){
    return this.bookingForm.get('cvv')
  } 

  onChange(){
    let charge = this.serviceAmount * this.bookingForm.get("squareFeet")?.value 
    this.bookingForm.get("serviceCharge")?.setValue(charge)
  }

  // onSubmit(body:object){
  //     this.bookingService.addReservation(body).subscribe({
  //     next:(res)=>{
  //       alert("Service booked")
  //     },
  //     error:(err)=>{
  //       console.log(err);          
  //     }
  //   })
  // }

  onSubmit(body:object):void{
    this.bookingService.addReservation(body).subscribe({
      next: (res: any) => {
        console.log(`Body passed`);
        alert(`Reservation Added`);
      },
      error: () => {
        console.log(`Error occured adding student`);
      }
    }
  )}
  
}

