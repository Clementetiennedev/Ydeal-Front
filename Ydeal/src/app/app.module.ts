import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccueilComponent} from "../components/accueil/accueil.component";
import {LoginPageComponent} from "../components/login-page/login-page.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {RegisterPageComponent} from "../components/register-page/register-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginPageComponent,
    NavbarComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
