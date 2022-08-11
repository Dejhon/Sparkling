import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssessService } from 'src/app/Services/assess.service';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  @ViewChild('message') message!: ElementRef;

  constructor(private assessmentService:AssessService, private route: Router) { }

  ngOnInit(): void {
  }

    onSubmit(body:object):void{
      if(this.assessmentForm.invalid){
        this.message.nativeElement.innerHTML = "THIS FORM IS INVALID";
        this.message.nativeElement.style.color = "red";
        this.message.nativeElement.style.letterSpacing = "2px";
      }else{
        this.assessmentService.addAssessment(body).subscribe({
          next: (res: any) => {
              this.message.nativeElement.innerHTML = "THIS FORM HAS BEEN SUBMITTED";
              this.message.nativeElement.style.color = "limegreen";
              this.message.nativeElement.style.letterSpacing = "2px";
              this.route.navigate(['/home'])
          },
          error: () => {
            console.log(`Error occured adding assessment`);
          },
        }
     )}
    }

  assessmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/)]),
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
