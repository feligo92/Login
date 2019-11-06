import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged: boolean = false;
  arrUsers: object[] = [];

  constructor() { 

    let usersLocalStorage = JSON.parse(localStorage.getItem("users"));
    this.isLogged = (JSON.parse(localStorage.getItem("isLogged")) !=null ? JSON.parse(localStorage.getItem("isLogged")): false);
    this.arrUsers = (usersLocalStorage != null ? usersLocalStorage : []);

  }


  signIn(name: string, pass: string): void {

    this.arrUsers.push({ "username": name, "password": pass })

    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem("users", JSON.stringify(this.arrUsers))
    }
  }

  login(name: string, pass: string): void {
    for (let i = 0; i < this.arrUsers.length; i++) {
      if (name === this.arrUsers[i]["username"] && pass === this.arrUsers[i]["password"]) {
        this.isLogged = true;
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("isLogged", JSON.stringify(this.isLogged))
        }
      }
    }
  }

  logout() {
    this.isLogged = false;
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem("isLogged", JSON.stringify(this.isLogged))
    }
  }
}
