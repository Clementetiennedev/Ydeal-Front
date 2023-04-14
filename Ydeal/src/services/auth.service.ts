import { Injectable } from '@angular/core';

import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLoggedIn: boolean = false;
  public userToken: string|undefined;
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  async signUpUser(user: any) {
    await this.afAuth.createUserWithEmailAndPassword(user.email.toLowerCase(), user.password);
  }

  async loginUser(email: string, password: string) {
    const user = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.userLoggedIn = true;
    this.userToken = await user.user?.getIdToken();
    console.log("Auth services : Login success");
  }
}
