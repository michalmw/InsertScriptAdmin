import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user = {
    email: undefined,
    password: undefined
  }
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  formValid() {
    if (this.user.email !== '' && this.user.password !== '') {
      return true;
    } else {
      alert('Podaj login i hasło');
    }
  }

  onSubmit(user) {

    if (this.formValid()) {
      this.loginService.login(this.user)
      .subscribe(
        res => {
          console.log('Res', res);
          this.router.navigate(['/app']);
        },
        err => {
          console.error('Error typu:', err);
        }
      );
    }
  }

}
