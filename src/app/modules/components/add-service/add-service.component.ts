import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealsService } from 'src/app/Services/deals.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  constructor(private createService:DealsService) { }


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
    this.createService.addService(body).subscribe({
      next: (res: any) => {
        console.log(`Body passed ${JSON.stringify(res)}`);
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
