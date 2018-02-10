import { ArchivesService } from './../archives.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archiwes-component',
  template: `
  <div class="row">
    <div class="col-2">
    <nav class="nav flex-column menu-with-rooms">
      <a class="nav-link"
        [class.active]="i == openedRoom"
        *ngFor="let room of chatRooms; let i = index;"
        (click)="open(i)">
        <i class="fa fa-comment"></i>
        Room {{ room?.name }} <br>
        <i class="fa fa-safari"></i>
          <small>Bramka: {{room?.messages[0].gateName}}</small>
      </a>
    </nav>
    </div>
    <div class="col-10">
      <h3>Szczegóły pokoju</h3>
      <div *ngIf="openedRoom != null; else chooseRoom">
      <div class="message-content" #list [scrollTop]="list.scrollHeight">
      <div *ngFor="let message of messages" style="overflow: hidden;">
          <div class="message" [ngClass]="{'float-left': message?.type === 'fromClient', 'float-right': message?.type === 'fromUser'}">
            <span class="float-left">Sender: {{message?.sender}}</span>
            <span class="float-right">{{message.timestamp | date: 'yyyy-MM-dd yy:mm:ss'}}</span> <br />
            <p>
              {{ message.message }}
            </p>
          </div>
      </div>
    </div>
    <form [formGroup]="roomForm" class="bottom-fixed">
      <div class="form-group">
        <textarea placeholder="Twoja wiadomość.." class="form-control" id="text" rows="3"
        (keyup.enter)="send()" formControlName="message"></textarea>
      </div>
      <button type="button" class="btn btn-success float-right" (click)="send()">Send</button>
    </form>
      </div>
      <ng-template #chooseRoom>
        <p>Wybierz pokój z listy aby otworzyć historie wiadomości...</p>
      </ng-template>
    </div>
  </div>
`
})
export class ArchivesListComponent implements OnInit {

  archives = [];

  constructor(private archivesService: ArchivesService) {
    this.archivesService.get().subscribe(
      res => this.archives = res,
      err => alert('Aktualnie nie ma takiego resta jeszcze :D')
    );
  }

  ngOnInit() { }
}
