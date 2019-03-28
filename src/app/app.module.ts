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
import { UsersService } from './users/users-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './users/create-user/create-user.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    [RouterModule.forRoot([
      { path: '', component: AppComponent}
    ])],
    PanelModule,
    CardModule,
    TabMenuModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelMenuModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
