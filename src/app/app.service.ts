import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private router: Router) {}

  handleError(err) {
    if (err.status === '401') {
      this.router.navigate(['/login']);
      return;
    }
    return Observable.throw(err);
  }
}
