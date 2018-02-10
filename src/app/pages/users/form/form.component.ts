import { Company } from './../../companys/company.types';
import { CompanyService } from './../../companys/company.service';
import { Gateway } from './../../configure-chats/configure-chats.types';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../user.types';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigureChatsService } from '../../configure-chats/configure-chats.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class UsersFormComponent implements OnInit {

  id: string;
  companys: Company[];
  user = new User();
  gateway: Gateway[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: false,
    text: 'Select Countries',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: false,
    classes: ''
  };

  constructor(
    private acRouter: ActivatedRoute,
    private companysService: CompanyService,
    private configurateChats: ConfigureChatsService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.id = this.acRouter.snapshot.params.id;
    if (this.id) {
      this.usersService.getOne(this.id).subscribe(
        (user: User) => {
          delete user.password;
          user.companyId = user.companyId['_id'];
          this.user = user;
        }
      );
    }
    this.configurateChats.get().subscribe(
      res => {
        this.gateway = res;
        this.setDropdownList();
        if (this.id) {
          this.setSelectedItems();
        }
      }
    );

    this.companysService.get().subscribe(
      res => this.companys = res
    );
  }

  ngOnInit() {
  }

  // changeGetway(g) {
  //   if (this.user.gateway.map(i => i).indexOf(g._id) === -1) {
  //     this.user.gateway.push(g._id);
  //   } else {
  //     this.user.gateway = this.user.gateway.filter(i => i !== g._id);
  //   }
  // }

  // isChecked(id) {
  //   return this.user.gateway.map(i => i).indexOf(id) === -1 ? false : true;
  // }

  save() {
    this.user.gateway = [];
    this.selectedItems.forEach(item => this.user.gateway.push(item.id));
    console.log(this.user);
    if (this.id) {
      this.usersService.update(this.user).subscribe(
        (res) => this.router.navigate(['/app/users'])
      );
    } else {
      this.usersService.add(this.user).subscribe(
        res => {
          console.log('Response', res);
        },
        err => {
          console.error('Error', err);
        }
      );
    }
  }

  setDropdownList() {
    this.gateway.map(gate => {
      this.dropdownList.push({'id': gate._id, 'itemName': gate.name});
    });
  }

  setSelectedItems() {
    if (this.user.gateway) {
      this.user.gateway.forEach(item => {
        const obj = this.dropdownList.find(drop => drop.id === item);
        this.selectedItems.push(obj);
      });
    }
  }

}
