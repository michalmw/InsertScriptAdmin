import { ChatService } from './chat.service';
import { AppService } from './../app.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(
    private appService: AppService,
    private chatService: ChatService,
    private router: Router) {
    }

  ngOnInit() {
    // this.chatService.getRooms().subscribe(
    //   res => console.log('Res -- from pages service', res)
    // );
  }


  logout() {
    this.appService.logout();
    this.router.navigate(['/login']);
  }

}
