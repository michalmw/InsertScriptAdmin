import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchivesService } from './archives.service';
import { ArchivesListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: ArchivesListComponent
  }
];

@NgModule({
  declarations: [
    ArchivesListComponent
  ],
  imports: [ CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [ArchivesService],
})
export class ArchivesModule {}
