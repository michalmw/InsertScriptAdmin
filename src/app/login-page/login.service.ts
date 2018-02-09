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
    // fetch(`${this.url}`, {
    //   method: 'POST',
    //   credentials:'include',
    //   headers: { 'Content-Type': 'application/json'}
    //   body: JSON.stringify(user)
    // }).then(x=>x.text()).then(console.log)
    return this.http.post(this.url, user, {withCredentials: true}).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err) {
    return Observable.throw(err);
  }
}
