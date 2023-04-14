import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "../components/accueil/accueil.component";
import {LoginPageComponent} from "../components/login-page/login-page.component";
import {RegisterPageComponent} from "../components/register-page/register-page.component";
import {ProfilComponent} from "../components/profil/profil.component";
 import { AuthGuard } from "@angular/fire/auth-guard";
import {SiteVitrineComponent} from "../components/site-vitrine/site-vitrine.component";

const routes: Routes = [
  { path : '' , component : AccueilComponent},
  { path : 'login' , component : LoginPageComponent},
  { path : 'register' , component : RegisterPageComponent},
  { path : 'profil' , component : ProfilComponent},
  { path : 'site-vitrine' , component : SiteVitrineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
