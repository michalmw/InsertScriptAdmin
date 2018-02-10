import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-name',
  template: `
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
  </nav>`
})
export class ListNameComponent {

  @Input() chatRooms = [];
  @Input() openedRoom;

  @Output() openRoom = new EventEmitter();

  constructor() { }

  open(i) {
    this.openRoom.emit(i);
  }

}
