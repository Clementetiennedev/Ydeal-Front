import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service"
import{AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "../../models/user";

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
      'password': new FormControl('', [Validators.required]),
      'phone': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'campus': new FormControl('', Validators.required),
      'dateNais': new FormControl('', Validators.required)
    })
  }
  async signUp() {
    try {
      if (this.signupForm.invalid) {
        throw new Error("");
      }
      const user = new User(this.signupForm.value.email, this.signupForm.value.phone, this.signupForm.value.lastName, this.signupForm.value.firstName, this.signupForm.value.username, this.signupForm.value.description, this.signupForm.value.campus, this.signupForm.value.dateNais)
      const password = this.signupForm.value.password
      await this.authServices.signUpUser(user, password)
      await this.router.navigate(['login']);
    } catch (error) {
      console.log(error)
      this.firebaseErrorMessage = "Une erreur est survenue";
    }
  }
}
