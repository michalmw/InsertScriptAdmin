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
export class RoomsComponent {

  chatRooms: Room[] = [];
  openedRoom: number = null;
  roomForm: FormGroup;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private chatService: ChatService,
  private ws: WebSocketHandlerService) {

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

  sendData(event) {
    this.ws.sendData(event);
    this.chatRooms[this.openedRoom].messages.push(event);
  }
}
