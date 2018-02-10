import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

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
      }, {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
      }
    ]
  }];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
