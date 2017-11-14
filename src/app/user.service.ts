import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
@Injectable()
export class UserService {
  email= '';
  role:number;
  Shows = false;

  constructor(private http: Http) { }
  
  getUser(email){
    return this.http.get("http://192.168.15.21:8888/api/v1/getUser/"+email);
  }
  onSignup(email: string, name: string, password: string) {
    return this.http.post('http://192.168.15.21:8888/api/v1/newUser',
    ({ email : email , name: name, password: password}));
  }
  getmovie(){
    return this.http.get("http://192.168.15.21:8888/api/v1/getMovie");
  }
  getseries(){
    return this.http.get("http://192.168.15.21:8888/api/v1/getSeries");
  }



}


  
