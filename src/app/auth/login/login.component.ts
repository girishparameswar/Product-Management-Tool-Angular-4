import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth : any = {};
  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  authenticate() {
    this._authService.authenticate(this.auth)
    //console.log(this.auth);
    //console.log(this._authService);
  }

}
