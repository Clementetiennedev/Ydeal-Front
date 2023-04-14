import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  products!: any;
  ownerId!: any;
  constructor(public afAuth: AngularFireAuth, public productService: ProductService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.productService.fetchAllProducts().subscribe((response: any) => {
      this.products = response.data
      this.ownerId = this.products.ownerId
      console.log(this.products)
      console.log(this.ownerId + "owner")
    })
  }

  getUser(ownerId: string){
    // @ts-ignore
    this.productService.getUserByProduct(ownerId).subscribe((res) => {
    })
  }
}
