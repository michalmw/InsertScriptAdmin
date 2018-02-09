import { CompanyService } from './../../companys/company.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.types';

import { Company } from './../../companys/company.types';
import { UsersService } from './../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-add',
  templateUrl: './add.component.html'
})
export class UsersAddComponent {

  user = new User();
  companys: Company[];

  constructor(private companyService: CompanyService,
    private userService: UsersService,
    private router: Router) {
    this.companyService.get().subscribe(
      (data: Company[]) => this.companys = data
    );
  }

  save(user: User) {
    this.userService.add(user).subscribe(
      res => {
        this.router.navigate(['/app/users']);
      }
    );
  }

}
