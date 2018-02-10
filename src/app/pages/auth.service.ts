import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  private user = new BehaviorSubject({
    email: undefined,
    _id: undefined,
    type: undefined
  });

  private isLogged = new BehaviorSubject(false);

  constructor(private router: Router) {

    this.user.next({
      email: localStorage.getItem('email') || '',
      _id: localStorage.getItem('_id') || '',
      type: localStorage.getItem('type') || ''
    });
    if (localStorage.getItem('_id') ) {
      this.isLogged.next(true);
    }
  }

  setUser(user) {
    this.user.next(user);
    this.router.navigate(['/app']);
  }

  checkIsLogged() {
    return this.isLogged;
  }

  getUser() {
    return this.user;
  }


}
