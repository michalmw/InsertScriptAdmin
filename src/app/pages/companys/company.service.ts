import { Company } from './company.types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { AppService } from './../../app.service';



@Injectable()
export class CompanyService {

  url = `${environment.url}/api/company`;
  constructor(private http: HttpClient,
    private appService: AppService) {

  }

  add(company: Company) {
    return this.http.post(this.url, company, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

  update(company: Company) {
    return this.http.put(`${this.url}/${company._id}`, company, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

  get() {
    return this.http.get(this.url, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

  getOne(id: string) {
    return this.http.get(`${this.url}/${id}`, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`, {withCredentials: true}).pipe(
      catchError(this.appService.handleError)
    );
  }

}
