import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup ({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/)]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)]),
    subject: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required)
  })

  get firstName(){
    return this.contactForm.get('firstName');
  }

  get lastName(){
    return this.contactForm.get('lastName');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get phone(){
    return this.contactForm.get('phone');
  }

  get subject(){
    return this.contactForm.get('subject')
  }

  get message(){
    return this.contactForm.get('message');
  }

  onSubmit(){
    alert('MESSAGE HAS BEEN SENT')
    this.contactForm.reset();
  }


}
