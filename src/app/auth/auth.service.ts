import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  constructor(private _http : HttpClient, private _router : Router, private _cookieService : CookieService) { }

  authenticate(details) {
    this._http.post('http://localhost:2000/authenticate', details)
    .subscribe((data:any) => {
      if(data.loggedIn==true) {
        this._cookieService.set('loggedIn', data.loggedIn);
        this._cookieService.set('m_token', data.token);
        this._router.navigate(['/products']);
      } else {
        this._router.navigate(['/login']);
      }
    });
  }

  checkLogin() {
    return this._cookieService.get('loggedIn');
  }

  fetchToken() {
    return this._cookieService.get('m_token');
  }

}
