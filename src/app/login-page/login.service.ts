import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

import { environment } from './../../environments/environment';


@Injectable()
export class LoginService {

  url = `${environment.url}/login`;
  constructor(private http: HttpClient) {

  }

  login(user) {
    return this.http.post(this.url, user).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err) {
    return Observable.throw(err);
  }
}
