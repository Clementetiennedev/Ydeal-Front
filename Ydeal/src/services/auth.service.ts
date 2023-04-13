import { Injectable } from '@angular/core';

import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLoggedIn: boolean;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.userLoggedIn = false;
    this.afAuth.onAuthStateChanged((user) => {
      if(user){
        this.userLoggedIn = true;
      }else {
        this.userLoggedIn = false;
      }
    })
  }

  signUpUser(user: any): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) =>{
        let emailLower = user.email.toLowerCase();
        result.user?.sendEmailVerification();
      })
      .catch(error => {
        return console.log("Auth services; signup error", error);
        if(error.code)
          return { isValid: false, message: error.message}
      })
  }

  loginUser(email: string, password: string): Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Auth services : Login success");
      })
      .catch(error => {
        return console.log("Auth services : login error", error.code);
        if (error.code)
        {
          return { isValid: false, message: error.message}
        }
      })
  }
}
