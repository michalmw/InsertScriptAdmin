import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login-page/login-page.module#LoginPageModule'
  },
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
