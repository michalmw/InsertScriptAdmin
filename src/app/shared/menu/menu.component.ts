import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedUser = {
    email: undefined,
    type: undefined
  };

  constructor() {
    this.loggedUser.email = localStorage.getItem('loginAs');
    this.loggedUser.type = localStorage.getItem('type');
  }

  ngOnInit() {
  }

  checkRole(role) {
    if (this.loggedUser.type === 'admin') {
      return true;
    } else {
      if((this.loggedUser.type == 'owner' && role == 'owner') || (this.loggedUser.type == 'owner' && role =='user')) {
        return true;
      }

      if (this.loggedUser.type == 'user' && role == 'user') {
        return true;
      }
    }
    return false;
  }

}
