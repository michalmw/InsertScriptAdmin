import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ConfigureChatsService } from './configure-chats/configure-chats.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ChatService } from './chat.service';
import { RoomsComponent } from './rooms/rooms.component';
import { WebSocketHandlerService } from './websocket.service';
import { SharedModule } from '../shared/shared.module';
import { CompanyService } from './companys/company.service';

const routes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        {
          path: 'archives',
          loadChildren: './archives/archives.module#ArchivesModule'
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'rooms',
          loadChildren: './rooms/rooms.module#RoomsModule'
        }, {
          path: 'companys',
          loadChildren: './companys/companys.module#CompanysModule'
        }, {
          path: 'users',
          loadChildren: './users/users.module#UsersModule'
        }, {
          path: 'configure-chats',
          loadChildren: './configure-chats/configure-chats.module#ConfigureChatsModule'
        }, {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
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
    PagesComponent,
  ],
  providers: [
    ChatService,
    CompanyService,
    ConfigureChatsService,
    WebSocketHandlerService
  ]
})

export class PagesModule { }
