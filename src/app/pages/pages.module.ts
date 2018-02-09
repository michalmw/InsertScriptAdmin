import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PushNotificationComponent } from './notify/nx.component';
import { PagesComponent } from './pages.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotifyComponent } from './notify/notify.component';
import { SharedModule } from '../shared/shared.module';

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
          component: RoomsComponent
        }, {
          path: 'notify',
          component: NotifyComponent
        }
      ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    NotifyComponent,
    PagesComponent,
    PushNotificationComponent,
    RoomsComponent,
  ]
})

export class PagesModule { }
