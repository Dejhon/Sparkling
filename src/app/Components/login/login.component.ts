import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/models/Users';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('message') message!: ElementRef;

  visibility = false
  user!: Users;

  constructor(private authenticate:AuthService, private route: Router,) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  view(){
    this.visibility = !this.visibility
  }

onSubmit(body:object):void{
  this.authenticate.loginUser(body).subscribe({
    next: (res: any) => {
        if(res && res['token']){
          localStorage.setItem('token',res.token); 
            this.message.nativeElement.innerHTML ="LOGIN SUCCESSFUL";
            this.message.nativeElement.style.color ="green"
            this.message.nativeElement.style.marginBottom ="-20px"
            this.route.navigate(['/profile'])
        }else{
          this.message.nativeElement.innerHTML ="INVALID CREDENTIALS"
          this.message.nativeElement.style.color ="red"
          this.message.nativeElement.style.marginBottom ="-20px"
        }
    },
    error: () => {
      console.log(`Error occured adding student`);
    }
  }
)}

}

