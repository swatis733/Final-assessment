import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
@Injectable()
export class UserService {
  email= '';
  role:number;

  constructor(private http: Http) { }

  getUser(email){
    return this.http.get("http://localhost:4200/api/v1/getUser/"+email);
  }
  // onSignup(email: string, name: string, password: string) {
  //   return this.http.post('http://localhost:4200/api/v1/newUser',
  //   ({ email : email , name: name, password: password}));
  // }
}


  
