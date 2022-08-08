import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

imageData!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addServiceForm = new FormGroup({
    sName: new FormControl('',Validators.required),
    sDescription: new FormControl('', Validators.required),
    sCost: new FormControl('', Validators.required),
    firstImage:new FormControl('', Validators.required),
    secondImage:new FormControl('', Validators.required),
    thirdImage:new FormControl('', Validators.required)
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

  get firstImage(){
    return this.addServiceForm.get('firstImage');
  }

  get secondImage(){
    return this.addServiceForm.get('secondImage');
  }

  get thirdImage(){
    return this.addServiceForm.get('thirdImage');
  }

  onFileSelect(event:any){
    const file = (event.target!.files[0] as HTMLInputElement);
    this.addServiceForm.patchValue({
      firstImage: file,
      secondImage: file,
      thirdImage: file
    });
    if(file){
      const reader = new FileReader();
      reader.onload = () =>{
      this.imageData = reader.result as string
      }
      reader.readAsDataURL()
    }
  }

  submitForm(){

  }

}
