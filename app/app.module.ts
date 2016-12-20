import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HomeComponent }   from './component/home.component';
import { Group1Component }   from './component/group1.component';
import { IndexComponent } from './component/index.component';
import { LoginComponent } from './component/login.component';
import { AuthGuard } from './component/authguard.component';
import { HttpModule } from '@angular/http';
import { CustomerService} from './services/customer.service';
import {CookieService} from 'angular2-cookie/core';


@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule, RouterModule.forRoot([
    { path: '', component: HomeComponent , canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]  },
    { path: 'group1', component: Group1Component , canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
  ]),
  ],
  declarations: [ HomeComponent, Group1Component, IndexComponent , LoginComponent],
  providers: [ AuthGuard ,CustomerService, CookieService ],
  bootstrap: [ IndexComponent ]
})

export class AppModule { }
