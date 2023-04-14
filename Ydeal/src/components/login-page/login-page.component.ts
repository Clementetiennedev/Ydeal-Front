import { Component, OnInit } from '@angular/core';

import { Router} from "@angular/router";
import{AuthService} from "../../services/auth.service";
import { FormGroup, FormControl, Validators} from "@angular/forms";
 import { AngularFireAuth} from "@angular/fire/compat/auth";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
   loginForm!: FormGroup;
   firebaseErrorMessage: string;
  constructor(private authServices: AuthService, private router: Router, private afAuth: AngularFireAuth)
  {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
    this.firebaseErrorMessage = '';
  }
  ngOnInit(): void {
  }

  async loginUser() {
    try {
      if (this.loginForm.invalid) {
        throw new Error("");
      }

      await this.authServices.loginUser(this.loginForm.value.email, this.loginForm.value.password);
      await this.router.navigate(['']);
    } catch (error) {
      console.log('login error')
      this.firebaseErrorMessage = "Une erreur est survenue";
    }
  }
}
