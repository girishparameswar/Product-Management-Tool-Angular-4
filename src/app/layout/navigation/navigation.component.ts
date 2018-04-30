import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _authService: AuthService, private _cookie: CookieService, private _router: Router) { }
  
  ngOnInit() {
  }

  togglebutton() {
    if(this._authService.checkLogin()) {
      return true;
    }else{
      return false;
    }
  }

  logout() {
    this._cookie.deleteAll();
    this._router.navigate(['/login']);
  }

}
