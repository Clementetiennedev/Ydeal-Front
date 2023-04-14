import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, private afAuth: AngularFireAuth, private authService: AuthService) { }

  // @ts-ignore
  fetchAllProducts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.userToken
    })
    try {
      return this.httpClient.get('https://ydeal.herokuapp.com/api/products/', {headers: headers});
    } catch (e) {
      console.log("ERROR")
    }
  }

  // @ts-ignore
  getUserByProduct(ownerId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.userToken
    })
    try {
      return this.httpClient.get('https://ydeal.herokuapp.com/api/users/'+ownerId, {headers: headers});
    } catch (e) {
      console.log("ERROR")
    }
  }
}
