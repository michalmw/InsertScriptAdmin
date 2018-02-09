import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent]
})
export class SharedModule { }
