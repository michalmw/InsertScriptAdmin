import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class CompanyListComponent implements OnInit {

  tableConfig = {
    columns: [
      {
        column: 'Nazwa',
        name: 'name'
      }, {
        column: 'Opis',
        name: 'description'
      }
    ],
    data: undefined
  };

  constructor(
    private companyservice: CompanyService
  ) { }

  ngOnInit() {
    this.companyservice.get().subscribe(
      (data: Company[]) => this.tableConfig.data = data
    );
  }


  delete(id: string) {
    const result = confirm('Czy napewno chcesz usunąć?');
    if (result) {
      this.companyservice.delete(id).subscribe(
        (res) => {
          this.tableConfig.data = this.tableConfig.data.filter(company => company._id !== id);
        }
      );
    }
  }

}
