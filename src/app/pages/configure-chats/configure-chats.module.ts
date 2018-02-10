import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ConfigureChatsFormComponent } from './form/form.component';
import { ConfigureChatsListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { ConfigureChatsService } from './configure-chats.service';

const routes: Routes = [
  {
    path: '',
    component: ConfigureChatsListComponent
  },
  {
    path: 'add',
    component: ConfigureChatsFormComponent
  },
  {
    path: 'edit/:id',
    component: ConfigureChatsFormComponent
  },
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
    ConfigureChatsFormComponent,
    ConfigureChatsListComponent
  ],
  providers: [
    ConfigureChatsService
  ]
})
export class ConfigureChatsModule { }
