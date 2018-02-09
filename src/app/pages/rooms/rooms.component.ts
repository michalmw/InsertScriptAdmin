import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Message, Room } from './rooms.types';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  room1: Room = {_id: '1', messages: []};
  room2: Room = {_id: '2', messages: []};
  room3: Room = {_id: '3', messages: []};
  chatRooms: Array<Room> = [this.room1, this.room2, this.room3];
  openedRoom = 1;
  roomForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.roomForm = this.fb.group({
      message: ''
    });
  }

  openRoom(index: number) {
    this.openedRoom = index + 1;
  }

  send() {
    console.log(this.roomForm);
  }
}
