import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AuthService } from './pages/auth.service';


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
        redirectTo: 'login',
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
  providers: [ AuthService, AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
