import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.types';

@Component({
  selector: 'app-users-list',
  template: `
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">Lista użytkowników</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group mr-2">
        <button class="btn btn-sm btn-outline-secondary" [routerLink]="['./add']">Dodaj</button>
      </div>
    </div>
  </div>
  <div>
  <app-sur-table
    [config]="tableConfig"
    (deleteRow)="delete($event)"></app-sur-table>
  </div>
`
})
export class UsersListComponent {
  tableConfig = {
    columns: [
      {
        column: 'Email',
        name: 'email'
      }, {
        column: 'Typ',
        name: 'type'
      }
    ],
    data: undefined
  };

  constructor(
    private usersService: UsersService
  ) {
    this.usersService.get().subscribe(
      (data: User[]) => this.tableConfig.data = data
    );
  }

  delete(id: string) {
    const result = confirm('Czy napewno chcesz usunąć?');
    if (result) {
      this.usersService.delete(id).subscribe(
        (res) => {
          this.tableConfig.data = this.tableConfig.data.filter(user => user._id !== id);
        }
      );
    }
  }

}
