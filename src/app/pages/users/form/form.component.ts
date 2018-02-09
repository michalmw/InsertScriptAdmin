import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../user.types';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class UsersFormComponent implements OnInit {

  id: string;
  user = new User();

  constructor(
    private acRouter: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {
    this.id = this.acRouter.snapshot.params.id;
    if (this.id) {
      this.usersService.getOne(this.id).subscribe(
        (user: User) => this.user = user
      );
    }
  }

  ngOnInit() {
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
