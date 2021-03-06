import { FormGroup, FormBuilder } from '@angular/forms';
import { Message } from './../rooms.types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-view',
  template: `
    <div class="message-content" #list [scrollTop]="list.scrollHeight">
      <div *ngFor="let message of messages" style="overflow: hidden;">
          <div class="message" [ngClass]="{'float-left': message?.type === 'fromClient', 'float-right': message?.type === 'fromUser'}">
            <span class="float-left">Sender: {{message?.sender}}</span>
            <span class="float-right">{{message.timestamp | date: 'yyyy-MM-dd yy:mm:ss'}}</span> <br />
            <p *ngIf="message.type !== 'image'">
              {{ message.message }}
            </p>
            <img *ngIf="message.type == 'image'" class="img-fluid" src="{{message.url}}">
          </div>
      </div>
    </div>
    <form [formGroup]="roomForm" class="bottom-fixed">
      <div class="form-group">
        <textarea placeholder="Twoja wiadomość.." class="form-control" id="text" rows="3"
        (keyup.enter)="send()" formControlName="message"></textarea>
      </div>
      <button type="button" class="btn btn-success float-right" (click)="send()">Send</button>
    </form>
  `,
  styles: [
    `
    .message-content {
      overflow-y: scroll;
      height: 80vh;
    }
    `
  ]
})
export class RoomViewComponent implements OnInit {

  @Input() messages = [];
  @Input() openedRoom;

  @Output() sendData = new EventEmitter();

  roomForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.roomForm = this.fb.group({
      type: 'fromUser',
      message: '',
      sessionId: '123'
    });
  }

  send() {
    const message = new Message(this.roomForm.value.type, this.roomForm.value.message,
      this.messages[0].sessionId);
    this.sendData.emit(message);
    this.buildForm();
  }
}
