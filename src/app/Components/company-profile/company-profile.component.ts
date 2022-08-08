import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login'])
  }

}
