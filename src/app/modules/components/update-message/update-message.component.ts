import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Messages } from 'src/app/models/message';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.css']
})
export class UpdateMessageComponent implements OnInit {

  message!:Messages;
  selectedId : string  = this.activateRoute.snapshot.params['id'];
  updateMessage!:FormGroup

  constructor(private activateRoute:ActivatedRoute, private route:Router, private messageService:MessageService) { }

  getById(){
    this.messageService.getMessageById(this.selectedId).subscribe((Message) => {
      this.message = Message[0]
      this.updateMessage = new FormGroup({
        currentStatus:new FormControl(this.message.status),
        status: new FormControl(this.message.status, Validators.required)
      });
     });
  }
  
  get status(){
    return this.updateMessage.get('status');
  }

  
  submit(body:object){
    this.messageService.updateMessage(this.selectedId, body).subscribe({
      next:()=>{
        alert('Message status updated')
        this.route.navigate(['/profile/messages'])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.getById();
  }

}
