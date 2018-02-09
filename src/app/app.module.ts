import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        loadChildren: './login-page/login-page.module#LoginPageModule'
      },
      {
        path: 'app',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  }];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
