import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {

  url = '';
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
