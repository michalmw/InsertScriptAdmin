import { WebSocketHandlerService } from './../websocket.service';
import { ChatService } from './../chat.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Message, Room } from './rooms.types';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  chatRooms: Room[] = [];

  openedRoom: number = null;
  roomForm: FormGroup;

  constructor(private fb: FormBuilder,
  private chatService: ChatService,
  private ws: WebSocketHandlerService) {

    this.getAllData();
  }

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

  getAllData() {
    
 
      // obieranie Wszystkich Roomów on start
    this.chatService.getCRooms().subscribe(
      res => {
        console.log('CRooms xD', res);
        this.chatRooms = res;
      });
  }


  openRoom(index: number) {
    this.openedRoom = index;
  }


  send() {
    const message = new Message(this.roomForm.value.type, this.roomForm.value.message,
      this.chatRooms[this.openedRoom].messages[0].sessionId);
    this.ws.sendData(message);
    this.chatRooms[this.openedRoom].messages.push(message);
    this.buildForm();
  }
}
