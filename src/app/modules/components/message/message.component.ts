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
  @ViewChild('note') note!:ElementRef

  constructor(private messageService:MessageService, private route:Router) { }

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(){
    this.messageService.getAllMessages().subscribe(allMessages => this.messages = allMessages)
  }

  delete(id:any){
    this.messageService.deleteMessage(id).subscribe({
      next:()=>{
        this.note.nativeElement.innerHTML ="Message Deleted"
        this.note.nativeElement.style.textAlign ="center"
        this.note.nativeElement.style.color ="red"
        this.note.nativeElement.style.fontSize ="18px";
        this.getAllMessages();
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }

  moveToEdit(id:any){
    this.route.navigate(['/profile/updateMessages/' + id]);
  }

}
