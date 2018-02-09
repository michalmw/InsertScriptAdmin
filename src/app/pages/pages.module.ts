import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RoomsComponent } from './rooms/rooms.component';
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
    PagesComponent,
    RoomsComponent
  ]
})

export class PagesModule { }
