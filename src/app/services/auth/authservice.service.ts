import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signIn } from 'src/data-type';
import { GlobalVariable } from 'src/global';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn = false;
  constructor(private http: HttpClient, private route: Router) {
  }

  login(data: signIn) {
    return this.http.post(GlobalVariable.BASE_API_URL + "login", data, { observe: "response" }).subscribe((result: any) => {
      if (result) {
        sessionStorage.setItem('name', JSON.stringify(result.body.data.name));
        sessionStorage.setItem('token', JSON.stringify(result.body.data.token));
        this.route.navigate([""]);
      } else {

      }
    });
  }

  isloggedIn() {
    if (sessionStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.clear();
    this.route.navigate(["login"]);
  }

}
