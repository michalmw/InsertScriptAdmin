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
  public lastMassage: BehaviorSubject<any> = new BehaviorSubject({});
  private wasInit: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private wsService: WebSocketHandlerService) {
     this.getData();
  }

  getData() {
    return this.rooms = <Subject<Room[]>>this.wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        if (data.type && data.type == 'init') {
          this.wasInit.next(true);
          this.convertedRooms.next(data['rooms']);
          return data['rooms'] || [];

        } else if (data.type && data.type === 'newRoom') {
          console.log('New Room', data);
          this.addNewRoom(data);

        } else {
          console.log('New Chat', data);
          
          this.addNewChat(data);
          return data['rooms'];

        }
      });
  }

  addNewRoom(data) {
    let tmpData = {
      gateId: data.gateId,
      gateName: data.gateName,
      message: data.message,
      sessionId: data.sessionId,
      timestamp: data.timestamp,
      type: 'fromClient'
    };
    this.convertedRooms.subscribe(
      r => {
        r.push({
          _id: data.sessionId,
          gateId: data.gateId,
          name: data.name,
          messages: [
            tmpData
          ]
        });
      }
    );
    this.lastMassage.next(tmpData);
  }

  addNewChat(data) {
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
