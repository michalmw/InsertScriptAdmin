import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigureChatsAddComponent } from './add/add.component';
import { ConfigureChatsListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { ConfigureChatsService } from './configure-chats.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ConfigureChatsListComponent
  },
  {
    path: 'add',
    component: ConfigureChatsAddComponent
  },
  // {
  //   path: 'edit/:id',
  //   component: UsersFormComponent
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ConfigureChatsAddComponent,
    ConfigureChatsListComponent
  ],
  providers: [
    ConfigureChatsService
  ]
})
export class ConfigureChatsModule { }
