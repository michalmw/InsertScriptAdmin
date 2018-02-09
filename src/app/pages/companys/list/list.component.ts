import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class CompanyListComponent implements OnInit {

  companys: Company[];
  constructor(
    private companyservice: CompanyService
  ) { }

  ngOnInit() {
    this.companyservice.get().subscribe(
      data => this.companys = data
    );
  }

}
