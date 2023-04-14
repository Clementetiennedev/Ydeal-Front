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
      'phone': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'campus': new FormControl('', Validators.required),
      'dateNais': new FormControl('', Validators.required)
    })
  }
  async signUp() {
    try {
      await this.authServices.signUpUser(this.signupForm.value)
      await this.router.navigate(['login']);
    } catch (error) {
      this.firebaseErrorMessage = "Une erreur est survenue";
    }
  }
}
