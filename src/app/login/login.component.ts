import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HomeComponent } from '../home/home.component';
import {Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http, private router: Router, private _cookieService: CookieService) {
  }
  Error_line = 'please fillup the empty field';
  show_Msg = false;
  login_user = {};
  loginUser  = function(olduser) {
    console.log(olduser);
    this.login_user = {
         user_email: olduser.email,
         user_password : olduser.pwd
    };
    // console.log('ankur', this.login_user);
    this.http.post('http://localhost:8000/info/login/', this.login_user).map(res => res.json()).subscribe(data => {
      console.log(data);
      if (data.value = 1) {
         this.show_Msg = true;
      }
      // localStorage.setItem('cookie', data.name);
      this._cookieService.put('key', data.name);
  });
  };
  ngOnInit() {
  }

}
