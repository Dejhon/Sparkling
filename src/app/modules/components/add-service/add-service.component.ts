import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DealsService } from 'src/app/Services/deals.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  @ViewChild('message') message!: ElementRef;

  constructor(private createService:DealsService, private route:Router) { }


  ngOnInit(): void {
  }

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
 

 
  addService(body:object):void{
    if(this.addServiceForm?.pristine){
      this.message.nativeElement.innerHTML = 'FORM FIELDS CANNOT BE EMPTY'
      this.message.nativeElement.style.color = 'red'
      this.message.nativeElement.style.marginTop = '-10px'
    }
    this.createService.addService(body).subscribe({
      next: (res: any) => {
        console.log(`Body passed ${JSON.stringify(res)}`);
        this.route.navigate(['/profile/view-services'])
      },
      error: () => {
        console.log(`Error occured adding student`);
      },
      // complete: () =>{
      //   alert(`Student Added`);
      //   this.route.navigate(['/home'])
      // }
    }
  )}

 
}
