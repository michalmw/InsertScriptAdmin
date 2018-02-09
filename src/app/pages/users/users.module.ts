import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';

import { UsersAddComponent } from './add/add.component';
import { UsersListComponent } from './list/list.component';
import { UsersService } from './users.service';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  }, {
    path: 'add',
    component: UsersAddComponent
  }
];

@NgModule({
  declarations: [UsersListComponent, UsersAddComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule ],
  exports: [],
  providers: [ UsersService],
})
export class UsersModule {}
