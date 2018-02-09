import { ChatService } from './../chat.service';
import { Component } from '@angular/core';
import { PushNotificationComponent } from './nx.component';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html'

})
export class NotifyComponent {

  private message = {
    author: 'tutorialedge',
    message: 'this is a test message'
  };

  public notification: any = {
    show: false,
    title: 'New Angular 2 Library!',
    body: 'ng2-notifications',
    icon: 'https://goo.gl/3eqeiE',
    action: function () {
      window.open('https://github.com/alexcastillo/ng2-notifications');
    }
  };

  constructor(
    private chatService: ChatService
  ) {
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: ", msg);
    });
  }

 

 

  close() {}

  sendMsg() {
    console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }
  
}
