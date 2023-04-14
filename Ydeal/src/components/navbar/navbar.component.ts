import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public logoUrl : string = '/assets/logo-Ydeal.png';
  constructor(public authServices: AuthService, private afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
  }

  //Probleme de derniere minute la deconnexion ne fonctionne plus au dernier moment apres le rush et du code a la va vite donc j'ai supprimer le boutton
  logout(): void{
    //On deconnecter le user et on re-dirige a l'accueil
    this.afAuth.signOut();
    this.router.navigate([""])
  }
}
