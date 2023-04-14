import { Injectable } from '@angular/core';

import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {error} from "@angular/compiler-cli/src/transformers/util";
import * as http from "http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLoggedIn: boolean = false;
  public userToken: string|undefined;
  constructor(private router: Router, private afAuth: AngularFireAuth, private httpClient: HttpClient) {}

  async signUpUser(user: User, password: string) {
    const newUser = await this.afAuth.createUserWithEmailAndPassword(user.email.toLowerCase(), password);
    const token = await newUser.user?.getIdToken()
    console.log(token)
    return this.signUpUserInAPI(token, user)
  }

  signUpUserInAPI(token: String|undefined, user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    const body = JSON.stringify(user)
    console.log(body)
    this.httpClient.post('https://ydeal.herokuapp.com/api/users/', body,  { headers: headers}).subscribe((el) => {
      return el
    })
  }

  async loginUser(email: string, password: string) {
    const user = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.userLoggedIn = true;
    this.userToken = await user.user?.getIdToken();
    console.log("Auth services : Login success");
  }
}
