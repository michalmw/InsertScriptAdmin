import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';


@Injectable()
export class CompanyService {

  url = `${environment.url}/api/company`;
  constructor(private http: HttpClient) {

  }

  add(user) {
    return this.http.post(this.url, user).pipe(
      catchError(this.handleError)
    );
  }

  get() {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err) {
    return Observable.throw(err);
  }
}
