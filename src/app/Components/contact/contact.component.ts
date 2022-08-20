import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('statusMessage') statusMessage!:ElementRef;

  constructor(private messageService:MessageService) { }

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

  onSubmit(body:object){
      this.messageService.addMessage(body).subscribe({
        next:()=>{
          this.statusMessage.nativeElement.innerHTML ="Message Sent";
          this.statusMessage.nativeElement.style.color ="green";
          this.contactForm.reset();     
        },
        error:(err)=>{
          console.log(err);          
        }
      })
  }


}
