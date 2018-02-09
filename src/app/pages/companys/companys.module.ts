import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CompanyFormComponent } from './form/form.component';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent
  },
  {
    path: 'add',
    component: CompanyFormComponent
  }, {
    path: 'edit/:id',
    component: CompanyFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    CompanyFormComponent,
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
  ],
})
export class CompanysModule {}
