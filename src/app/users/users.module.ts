import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import {UserComponent} from './user/user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UsersService} from './users.service';
import {RouterModule} from '@angular/router';
import {AppComponent} from '../app.component';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {MenuModule, PanelMenuModule, TabMenuModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot([
      { path: '', component: AppComponent}
    ])],
    ButtonModule,
    PanelModule,
    CardModule,
    TabMenuModule,
    MenuModule,
    PanelMenuModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    CreateUserComponent
  ],
  providers: [UsersService],
  exports: [UsersComponent]
})
export class UsersModule { }
