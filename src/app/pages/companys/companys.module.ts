import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CompanyListComponent } from './list/list.component';
import { CompanyAddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent
  },
  {
    path: 'add',
    component: CompanyAddComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    CompanyAddComponent,
    CompanyListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class CompanysModule {}
