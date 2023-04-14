import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "./auth.service";
import {Product} from "../models/product";

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
    console.log(headers)
    try {
      return this.httpClient.get('https://ydeal.herokuapp.com/api/products/', {headers: headers});
    } catch (e) {
      console.log("ERROR")
    }
  }

  createProduct(product: Product) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.userToken
    })
    const dataStringify = JSON.stringify(product)

    this.httpClient.post('https://ydeal.herokuapp.com/api/products/', dataStringify, { headers: headers })
  }
}
