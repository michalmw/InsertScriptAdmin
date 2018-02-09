import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CompanyAddComponent } from './add/add.component';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './list/list.component';


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
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [
    CompanyService
  ],
})
export class CompanysModule {}
