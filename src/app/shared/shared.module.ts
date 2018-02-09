import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { SurTableComponent } from './sur-table/sur-table.component';

@NgModule({
  exports: [
    MenuComponent,
    SurTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent,
    SurTableComponent]
})
export class SharedModule { }
