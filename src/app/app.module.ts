<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleNotificationsModule } from 'angular2-notifications';
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

>>>>>>> f6cac67af48e6a42f24414bb0eac5f0644e63af2
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
<<<<<<< HEAD
        path: 'app',
        loadChildren: './pages/pages.module#PagesModule'
      },
      {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
      }
    ]
  }
];
=======
        path: 'login',
        loadChildren: './login-page/login-page.module#LoginPageModule'
      },
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  }];
>>>>>>> f6cac67af48e6a42f24414bb0eac5f0644e63af2

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes),
=======
    RouterModule.forRoot(routes)
>>>>>>> f6cac67af48e6a42f24414bb0eac5f0644e63af2
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
