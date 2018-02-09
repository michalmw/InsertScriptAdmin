import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebSocketHandlerService } from './websocket.service';

import { environment } from './../../environments/environment';


const CHAT_URL = environment.websocketUrl;

export interface Message {
  author: string,
  message: string
}

@Injectable()
export class ChatService {
  public messages: Subject<Message>;

  constructor(wsService: WebSocketHandlerService) {
    this.messages = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        };
      });
  }
}
