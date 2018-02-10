import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { SharedModule } from './../../shared/shared.module';
import { UsersFormComponent } from './form/form.component';
import { UsersListComponent } from './list/list.component';
import { UsersService } from './users.service';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'add',
    component: UsersFormComponent
  }, {
    path: 'edit/:id',
    component: UsersFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [UsersFormComponent, UsersListComponent],
  imports: [
    AngularMultiSelectModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule ],
  exports: [],
  providers: [ UsersService ],
})
export class UsersModule {}
