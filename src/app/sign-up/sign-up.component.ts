import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private http: Http) {}
   public response = '';
   name = '';
   username = '';
   email_id = '';
  //  user_detalis = [];
   userinfo = {};
   // tslint:disable-next-line:no-inferrable-types
   AddnewUser = false;
   // tslint:disable-next-line:no-inferrable-types
   showForm = true;
   // tslint:disable-next-line:no-inferrable-types
   Info_line: string = 'this new user will be add';
  AddNewUser  = function(newuser) {
      console.log('click for login', newuser);
   this.userinfo = {
      'name': newuser.name,
      'username' : newuser.username,
      'email': newuser.email,
      'password': newuser.psw,
      're-password' : newuser.psw_repeat
    };
    console.log('ankur');
    this.http.post('http://localhost:8000/info/registion_of_newUsers/', this.userinfo).map(res => res.json()).subscribe(data => {
       console.log(data.name);
       this.name = data.name;
       this.username = data.username;
       this.email_id = data.email;
      //  this.user_detalis = data ;
      //  console.log(this.user_detalis);
       this.AddnewUser = true ;
       this.showForm = false;
    });

  };

  ngOnInit() {}
}
