import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ChatService } from './chat.service';
import { RoomsComponent } from './rooms/rooms.component';
import { NotifyComponent } from './notify/notify.component';
import { WebSocketHandlerService } from './websocket.service';
import { SharedModule } from '../shared/shared.module';
import { CompanyService } from './companys/company.service';

const routes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        {
          path: '',
          component: DashboardComponent
        },
        {
          path: 'rooms',
          loadChildren: './rooms/rooms.module#RoomsModule'
        }, {
          path: 'notify',
          component: NotifyComponent
        }, {
          path: 'companys',
          loadChildren: './companys/companys.module#CompanysModule'
        }, {
          path: 'users',
          loadChildren: './users/users.module#UsersModule'
        }, {
          path: 'configure-chats',
          loadChildren: './configure-chats/configure-chats.module#ConfigureChatsModule'
        }
      ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    NotifyComponent,
    PagesComponent,
  ],
  providers: [
    ChatService,
    CompanyService,
    WebSocketHandlerService
  ]
})

export class PagesModule { }
