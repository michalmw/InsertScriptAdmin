import { NameComponent } from './notify/notify.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PushNotificationComponent } from './notify/nx.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'notify',
      component: NameComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent,
    NameComponent,
    PushNotificationComponent
  ]
})

export class PagesModule { }
