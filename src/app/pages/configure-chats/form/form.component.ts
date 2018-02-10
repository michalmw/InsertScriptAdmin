import { ActivatedRoute, Router } from '@angular/router';
import { ConfigureChatsService } from './../configure-chats.service';
import { Component, OnInit } from '@angular/core';

import { Company } from '../../companys/company.types';
import { CompanyService } from '../../companys/company.service';
import { Gateway } from '../configure-chats.types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ConfigureChatsFormComponent implements OnInit {

  companies: Array<Company> = [];
  gateway = new Gateway();
  id: string;

  constructor(
    private acRouter: ActivatedRoute,
    private companyService: CompanyService,
    private configureChatsService: ConfigureChatsService,
    private router: Router
  ) {
    this.id = this.acRouter.snapshot.params.id;
    if (this.id) {
      this.configureChatsService.getOne(this.id).subscribe(
        (gateway: Gateway) => this.gateway = gateway
      );
    }
  }

  ngOnInit() {
    this.companyService.get().subscribe(
      (companies: Company[]) => this.companies = companies
    );
  }

  save() {
    console.log(this.gateway);
    this.configureChatsService.add(this.gateway).subscribe(
      res => {
        console.log('Response', res);
      },
      err => {
        console.error('Error', err);
      }
    );
  }
}
