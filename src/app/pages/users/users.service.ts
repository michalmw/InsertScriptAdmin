import { AppService } from './../../app.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

import { environment } from './../../../environments/environment';
import { User } from './user.types';


@Injectable()
export class UsersService {
  url = `${environment.url}/api/user`;
  constructor(private http: HttpClient,
    private appService: AppService) {
  }


  add(user) {
    return this.http.post(this.url, user).pipe(
      catchError(this.appService.handleError)
    );
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.appService.handleError)
    );
  }

  get() {
    return this.http.get(this.url).pipe(
      catchError(this.appService.handleError)
    );
  }

  getOne(id: string) {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError(this.appService.handleError)
    );
  }

  update(user: User) {
    return this.http.put(`${this.url}/${user._id}`, user).pipe(
      catchError(this.appService.handleError)
    );
  }

}
