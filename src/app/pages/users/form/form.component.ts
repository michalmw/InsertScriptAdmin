import { Gateway } from './../../configure-chats/configure-chats.types';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../user.types';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigureChatsService } from '../../configure-chats/configure-chats.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class UsersFormComponent implements OnInit {

  id: string;
  user = new User();
  gateway: Gateway[];

  constructor(
    private acRouter: ActivatedRoute,
    private configurateChats: ConfigureChatsService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.id = this.acRouter.snapshot.params.id;
    if (this.id) {
      this.usersService.getOne(this.id).subscribe(
        (user: User) => {
          delete user.password;
          this.user = user;
        }
      );
    }
    this.configurateChats.get().subscribe(
      res => this.gateway = res
    );
  }

  ngOnInit() {
  }

  changeGetway(g) {
    if (this.user.gateway.map(i => i).indexOf(g._id) === -1) {
      this.user.gateway.push(g._id);
    } else {
      this.user.gateway = this.user.gateway.filter(i => i !== g._id);
    }
  }

  isChecked(id) {
    return this.user.gateway.map(i => i).indexOf(id) === -1 ? false : true;
  }

  save() {
    if (this.id) {
      this.usersService.update(this.user).subscribe(
        (res) => this.router.navigate(['/app/users'])
      );
    } else {
      this.usersService.add(this.user).subscribe(
        res => {
          console.log('Response', res);
        },
        err => {
          console.error('Error', err);
        }
      );
    }
  }

}
