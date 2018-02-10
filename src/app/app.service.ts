import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs/Rx';
import { environment } from './../environments/environment';

@Injectable()
export class AppService {

  url = `${environment.url}/login`;
  constructor(private router: Router,
  private http: HttpClient) {}

  logout() {
    localStorage.clear();
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err) {
    if (err.status === '401') {
      this.router.navigate(['/login']);
      return;
    }
    return Observable.throw(err);
  }
}
