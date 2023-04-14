import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product!: FormGroup;
  errorMessage: String|undefined;
  showError: boolean = false;

  constructor(private productService: ProductService) {
    this.product = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  createProduct() {
    try {
      this.productService.createProduct()
    } catch (e) {
      this.showError = true
      this.errorMessage = "Une erreur est survenue"
    }
  }
}
