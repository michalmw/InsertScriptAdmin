import { AuthService } from './../pages/auth.service';
import { User } from './../pages/users/user.types';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user = new User();

  constructor(
    private authService: AuthService,
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
          localStorage.setItem('loginAs', res.user.email);
          localStorage.setItem('type', res.user.type);
          localStorage.setItem('_id', res.user._id);
          this.authService.setUser(res.user);
          this.router.navigate(['/app']);
        },
        err => {
          console.error('Error typu:', err);
        }
      );
    }
  }

}
