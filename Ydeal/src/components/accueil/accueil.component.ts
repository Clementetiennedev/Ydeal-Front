import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public productService: ProductService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.productService.fetchAllProducts().subscribe((response: any) => {
      console.log(response.data[0])
    })
  }
}
