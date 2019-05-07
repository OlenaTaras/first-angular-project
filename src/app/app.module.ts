import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PanelMenuModule,
  TabMenuModule
} from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './users/create-user/create-user.component';
import {FormsModule} from '@angular/forms';
import {
  provideRoutes,
  RouterModule,
  Routes
} from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {UsersModule} from './users/users.module';

const routers: Routes = [
  {
    path: 'user', component: UsersComponent, pathMatch: 'full'
  },
  {
    path: 'user/:id', component: UsersComponent, pathMatch: 'full'
   },
  {
    path: 'home', redirectTo: '/', pathMatch: 'full'
  }
] ;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    [RouterModule.forRoot(routers)],
    ButtonModule,
    PanelModule,
    CardModule,
    TabMenuModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    UsersModule,
    MenuModule,
    PanelMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
