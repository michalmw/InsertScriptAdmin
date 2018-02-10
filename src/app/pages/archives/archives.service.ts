import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { AppService } from './../../app.service';
import { environment } from './../../../environments/environment';


@Injectable()
export class ArchivesService {

  url = `${environment.url}/archives`;

  constructor(private http: HttpClient,
    private appService: AppService) {

  }

  get() {
    return this.http.get(this.url, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }
}
