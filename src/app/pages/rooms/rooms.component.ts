import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Message, Room } from './rooms.types';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  chatRooms: Room[] = [];

  openedRoom = 1;
  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    for (let i = 0; i < 9; i++) {
      this.chatRooms.push(new Room(i));
    }
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.roomForm = this.fb.group({
      sender: 0,
      message: ''
    });
  }

  openRoom(index: number) {
    this.openedRoom = index + 1;
  }

  send() {
    this.chatRooms[this.openedRoom].messages.push(new Message(this.roomForm.value.sender, this.roomForm.value.message));
    this.roomForm.reset();
  }
}
