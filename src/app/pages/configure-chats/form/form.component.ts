import { ActivatedRoute, Router } from '@angular/router';
import { ConfigureChatsService } from './../configure-chats.service';
import { Component, OnInit } from '@angular/core';

import { Company } from '../../companys/company.types';
import { CompanyService } from '../../companys/company.service';
import { Gateway, Colors } from '../configure-chats.types';
import { generate } from 'rxjs/observable/generate';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ConfigureChatsFormComponent implements OnInit {

  chatColorsArray = [
    new Colors('Górny pasek', '#135dcc'),
    new Colors('Tło czatu', '#eeeeee'),
    new Colors('Kolor wiadomości', '#3a5857'),

  ]
  companies: Array<Company> = [];
  gateway = new Gateway();
  id: string;
  sideArray = [
    {name: 'Prawa strona', value: 'right'},
    {name: 'Lewa strona', value: 'left'}
  ];
  sizeArray =  [
    {value: '10px'},
    {value: '11px'},
    {value: '12px'},
    {value: '13px'},
    {value: '14px'},
    {value: '15px'},
    {value: '16px'}
  ]

  constructor(
    private acRouter: ActivatedRoute,
    private companyService: CompanyService,
    private configureChatsService: ConfigureChatsService,
    private router: Router
  ) {
    console.log(this.gateway)
    this.id = this.acRouter.snapshot.params.id;
    if (this.id) {
      this.configureChatsService.getOne(this.id).subscribe(
        (gateway: Gateway) => {
          console.log(gateway)
          this.gateway = gateway
          this.gateway.colors ? this.chatColorsArray = gateway.colors : this.chatColorsArray= this.chatColorsArray; 
          this.gateway.side === 'left' ? this.gateway.side = gateway.side : this.gateway.side = 'right';
        }
      );
    }
  }

  ngOnInit() {
    this.companyService.get().subscribe(
      (companies: Company[]) => {
        this.companies = companies
      }
    );
  }

  save() {
    this.gateway['colors'] = this.chatColorsArray;
    console.log(this.gateway)
    if (this.id) {
      this.configureChatsService.update(this.gateway).subscribe(
        (res) => this.router.navigate(['/app/configure-chats'])
      );
    } else {
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

  setColor(color,i) {
    this.chatColorsArray[i].color = color;
  }
}
