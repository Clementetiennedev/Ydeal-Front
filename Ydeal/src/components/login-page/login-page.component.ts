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
  loginUser() {
    if(this.loginForm.invalid)
      return;

      this.authServices.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then((result) => {
          if(result == null){
            console.log("Logging in ...");
            this.router.navigate(['profil']);
          }
          else if (result.isValid == false) {
            console.log('login error', result)
            this.firebaseErrorMessage = result.message
          }
        })
  }
}
