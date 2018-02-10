import { ChatService } from './chat.service';
import { AppService } from './../app.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  loggedUser = {
    email: undefined,
    type: undefined
  };
  notification: any = {
    show: false,
    title: 'New Angular 2 Library!',
    body: 'ng2-notifications',
    icon: 'https://goo.gl/3eqeiE',
    action: function () {
      window.open('https://github.com/alexcastillo/ng2-notifications');
    }
  };
  @ViewChild('showmessage') showmessage: ElementRef;

  constructor(
    private appService: AppService,
    private chatService: ChatService,
    private router: Router) {

    this.loggedUser.email = localStorage.getItem('loginAs');
    this.loggedUser.type = localStorage.getItem('type');
    // Łączeinie z websocketem
    this.chatService.getData().subscribe(
      res => console.log('A dostaje tutaj zmianyt :D', res)
    );

    // Nowa wiadomość - powiadomienie
    this.chatService.getLastMassage().subscribe(
      data => {
        if (data.message) {
          this.notification = {
            title: 'Nowa wiadomość!',
            body: data.message
          };
          this.showmessage.nativeElement.click();
        }
      }
    );
    }

  ngOnInit() {}

  close() {}

  

  logout() {
    this.appService.logout();
    this.router.navigate(['/login']);
  }

}
