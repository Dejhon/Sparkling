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

//   onSubmit() {
//     this.authenticate.loginUser(this.loginForm.value).subscribe((res:any) =>{
//      if(res && res['status'] === 'ok' res['loginUser']) {
//         console.log('User logged in Successfully')
//         localStorage.setItem('username' , res['data']['existUser']['username'])
//         this.route.navigate(['/profile'])
//      }else{
//       console.log('Not valid user')
//      }
//      error: () => {
//       if(error) {
//          console.log('Error is ' , error)
//       }
//     }
//    }
// }

  onSubmit() {
    const formData = this.loginForm.getRawValue();
   
    if(this.loginForm?.invalid){
      alert('Please enter valid credentials')
    }else{
    const data = {
      userName: this.username?.value,
      password: this.password?.value,
    };
    const loginData = new FormData();

    loginData.append("email", data.userName);
    loginData.append("password", data.password);
    this.authenticate.loginUser(loginData).subscribe({
      next: (result: any) => {
        localStorage.setItem( 'token', result.data)
        this.route.navigate(['/profile']);
        alert('Successfully logged in')
      },
      error: (error) => {
      },
    });
  }
}

}

