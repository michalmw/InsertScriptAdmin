import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class CompanyFormComponent {

  id: string;
  company = new Company();

  constructor(
    private acRouter: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {
    this.id = this.acRouter.snapshot.params.id;
    if (this.id) { // Edycja
      this.companyService.getOne(this.id).subscribe(
        (company: Company) => this.company = company
      );
    }
  }

  save() {
    if (this.id) {
      this.companyService.update(this.company).subscribe(
        (res) => this.router.navigate(['/app/companys'])
      );
    } else {
      this.companyService.add(this.company).subscribe(
        res => {
          this.router.navigate(['/app/companys']);
        },
        err => {
          console.error('Error', err);
        }
      );
    }
  }
}
