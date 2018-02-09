import { AppService } from './../../app.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

import { environment } from './../../../environments/environment';


@Injectable()
export class UsersService {
  url = `${environment.url}/api/user`;

  constructor(private http: HttpClient,
    private appService: AppService) {
  }


  add(user) {
    return this.http.post(this.url, user, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

  get() {
    return this.http.get(this.url, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

}