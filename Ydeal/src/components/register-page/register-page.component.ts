import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service"
import{AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  signupForm!: FormGroup;
  firebaseErrorMessage: string;
  constructor(private authServices: AuthService, private router: Router, private afAuth: AngularFireAuth)
  {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
  }
  signUp()
  {
    console.log("oui")
    if(this.signupForm.invalid)
      return;
    this.authServices.signUpUser(this.signupForm.value).then((result) =>{
      if(result == null)
        this.router.navigate(['profil']);
      else if (result.isValid == false)
        this.firebaseErrorMessage = result.message
  })
  }

}
