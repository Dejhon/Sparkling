import { Component, OnInit } from '@angular/core';
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
        if(res && res['status'] === 'ok'){
          localStorage.setItem('token',res.token);          
          alert('Successfully logged in')
          this.route.navigate(['/profile']);
        }else{
          this.route.navigate(['/login'])
        }
    },
    error: () => {
      console.log(`Error occured adding student`);
    }
  }
)}

}

