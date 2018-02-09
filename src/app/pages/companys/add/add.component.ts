import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.types';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class CompanyAddComponent implements OnInit {
  company = new Company();

  constructor(
    private companyService: CompanyService
  ) {

  }

  ngOnInit() { }

  save() {
    console.log('Dodaje COmpany', this.company)
    this.companyService.add(this.company).subscribe(
      res => {
        console.log('Response', res);
      },
      err => {
        console.error('Error', err);
      }
    );
  }
}
