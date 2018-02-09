import { Gateway } from './configure-chats.types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { AppService } from './../../app.service';



@Injectable()
export class ConfigureChatsService {

  url = `${environment.url}/api/gateway`;
  constructor(private http: HttpClient,
    private appService: AppService) {

  }

  add(gateway: Gateway) {
    return this.http.post(this.url, gateway, {withCredentials: true}).pipe(
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
