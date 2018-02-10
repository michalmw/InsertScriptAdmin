import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { SurTableComponent } from './sur-table/sur-table.component';
import { PushNotificationComponent } from './notify/nx.component';

@NgModule({
  exports: [
    MenuComponent,
    PushNotificationComponent,
    SurTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent,
    PushNotificationComponent,
    SurTableComponent]
})
export class SharedModule { }
