import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { WebSocketHandlerService } from './websocket.service';

import { environment } from './../../environments/environment';
import { Room } from './rooms/rooms.types';


const CHAT_URL = environment.websocketUrl;

@Injectable()
export class ChatService {

  public rooms: Subject<Room[]>;

  public convertedRooms: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(wsService: WebSocketHandlerService) {
     this.rooms = <Subject<Room[]>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        if (data.type && data.type == 'init') {
          console.log('Data in constructor', data);
          this.convertedRooms.next(data['rooms']);
          return data['rooms'];
        } else {
          console.log('Data in constructor another', data);
          this.convertedRooms.subscribe(
            r => {
              for (let i = 0; i < r.length; i++) {
                if (r[i]._id == data.sessionId) {
                  r[i].messages.push(data);
                }
              }
            }
          );
          return data['rooms'];
        }
      });
  }

  getRooms() {
    return this.rooms;
  }

  getCRooms() {
    return this.convertedRooms;
  }
}
