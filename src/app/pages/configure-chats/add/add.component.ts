import { ConfigureChatsService } from './../configure-chats.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../companys/company.types';
import { CompanyService } from '../../companys/company.service';
import { Gateway } from '../configure-chats.types';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ConfigureChatsAddComponent implements OnInit {

  companies: Array<Company> = [];
  gateway = new Gateway();

  constructor(
    private companyService: CompanyService,
    private configureChatsService: ConfigureChatsService
  ) { }

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
