import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public _user: UserService) { }

  login() {
    let name: string = (<HTMLInputElement>document.querySelectorAll(".input_user")[0]).value;

    let pass: string = (<HTMLInputElement>document.querySelectorAll(".input_pass")[0]).value;

    this._user.login(name, pass);

  }

  signIn() {
    let name: string = (<HTMLInputElement>document.querySelector("#defaultForm-email")).value;
    let pass: string = (<HTMLInputElement>document.querySelector("#defaultForm-pass")).value;

    if (name != "" && pass != "") {

      this._user.signIn(name, pass);
    }
   
  }

}
