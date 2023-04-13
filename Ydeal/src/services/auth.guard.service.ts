import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import {Observable} from "rxjs";

import { AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate
{
  constructor(private router: Router, private afAuth: AngularFireAuth) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean>
  {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if(user)
        {
          resolve(true)
        }else {
          console.log('Auth Guard : user not logged in');
          this.router.navigate(['']);
          resolve(false)
        }
      })
    })
  }

}
