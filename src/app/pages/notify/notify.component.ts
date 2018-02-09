import { Component, OnInit } from '@angular/core';
import { PushNotificationComponent } from './nx.component';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html'

})
export class NotifyComponent implements OnInit {
  constructor() { }
  public notification: any = {
    show: false,
    title: 'New Angular 2 Library!',
    body: 'ng2-notifications',
    icon: 'https://goo.gl/3eqeiE',
    action: function () {
      window.open('https://github.com/alexcastillo/ng2-notifications');
    }
  };
  ngOnInit() { }
}
