import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  @ViewChild('response') response!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
     if(this.assessmentForm?.invalid || this.assessmentForm?.pristine){
      alert('This form is incomplete')
     }else{
      alert('Sumitted')
     }
  }

  assessmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })

  get name(){
    return this.assessmentForm.get('name')
  }

  get email(){
    return this.assessmentForm.get('email')
  }

  get address(){
    return this.assessmentForm.get('address')
  }

  

}
