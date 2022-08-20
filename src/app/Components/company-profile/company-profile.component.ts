import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/Services/message.service';
import { Messages } from 'src/app/models/message';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  total:number = 0;
  messages!:Messages[];

  constructor(private route:Router, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getNumberofMessages();
  }

  getNumberofMessages(): any{
    this.messageService.getAllMessages().subscribe((res)=> {
      this.messages = res;
      this.messages.forEach(element => {
        if(element.status == "unread"){
          this.total ++;
        }        
      });

    })
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/home'])
  }


  

}
