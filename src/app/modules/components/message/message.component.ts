import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';
import { Messages } from 'src/app/models/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages!:Messages[];
  searchText!:string;
  @ViewChild('note') note!:ElementRef

  constructor(private messageService:MessageService, private route:Router) { }

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(){
    this.messageService.getAllMessages().subscribe(allMessages => this.messages = allMessages)
  }

  delete(id:any){
    if(window.confirm("THIS MESSAGE WILL BE DELETED")){
      this.messageService.deleteMessage(id).subscribe({
        next:()=>{
          this.getAllMessages();
        },
        error:(err)=>{
          console.log(err);        
        }
      })
    }
  }

  moveToEdit(id:any){
    this.route.navigate(['/profile/updateMessages/' + id]);
  }

}
