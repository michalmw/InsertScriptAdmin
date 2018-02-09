import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { WebSocketHandlerService } from './websocket.service';

import { environment } from './../../environments/environment';
import { Room } from './rooms/rooms.types';


const CHAT_URL = environment.websocketUrl;

export interface Message {
  author: string,
  message: string
}

@Injectable()
export class ChatService {
  public rooms: Subject<Room[]>;

  constructor(wsService: WebSocketHandlerService) {
     this.rooms = <Subject<Room[]>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        console.log('Datattt', data);
        console.log('Data', data['rooms']);
        return data['rooms'];
      });
  }

  getRooms() {
    return this.rooms;
  }
}
