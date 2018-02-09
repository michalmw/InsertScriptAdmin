import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class CompanyAddComponent implements OnInit {
  company: Company;
  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit() { }

  save() {
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
