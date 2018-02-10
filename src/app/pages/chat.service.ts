import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { WebSocketHandlerService } from './websocket.service';

import { environment } from './../../environments/environment';
import { Room } from './rooms/rooms.types';


const CHAT_URL = environment.websocketUrl;

@Injectable()
export class ChatService {

  public rooms: Subject<Room[]>;
  private wasInit: BehaviorSubject<any> = new BehaviorSubject(false);
  public convertedRooms: BehaviorSubject<any> = new BehaviorSubject([]);

  public lastMassage: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private wsService: WebSocketHandlerService) {
     this.getData();
  }

  getData() {
    console.log('getData');
    return this.rooms = <Subject<Room[]>>this.wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        console.log('Data in map in connect');
        if (data.type && data.type == 'init') {
          this.wasInit.next(true);
          console.log('Data in constructor', data);
          this.convertedRooms.next(data['rooms']);
          return data['rooms'] || [];
        } else if (data.type && data.type === 'newRoom') {
          this.convertedRooms.subscribe(
            r => {
              r.push({
                _id: data.sessionId,
                gateId: data.gateId,
                messages: [
                  {
                    gateId: data.gateId,
                    message: data.message,
                    sessionId: data.sessionId,
                    timestamp: data.timestamp,
                    type: 'fromClient'
                  }
                ]
              });
            }
          );
          // this.convertedRooms.next(data['rooms']);
        } else {
          console.log('Data in constructor another', data);
          this.lastMassage.next(data);
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

  checkWasInit() {
    return this.wasInit;
  }

  getRooms() {
    return this.rooms;
  }

  getLastMassage() {
    return this.lastMassage;
  }

  getCRooms() {
    return this.convertedRooms;
  }
}
