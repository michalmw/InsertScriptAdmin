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

  constructor(private chatService: ChatService,
  private ws: WebSocketHandlerService) {

    // obieranie Wszystkich Roomów on start
    this.chatService.getCRooms().subscribe(
      res => {
        console.log('CRooms xD', res);
        this.chatRooms = res;
      });
  }

  ngOnInit() {}


  openRoom(index: number) {
    this.openedRoom = index;
  }

  sendData(event) {
    console.log('W send event', event);
    this.ws.sendData(event);
    this.chatRooms[this.openedRoom].messages.push(event);

  }
}
