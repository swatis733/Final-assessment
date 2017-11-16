import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
@Injectable()
export class UserService {
  email= '';
  role:number;
  Shows = false;
  shows1 = false;

  constructor(private http: Http) { }
  isLoggedIn() {
    return this.email === '' ? false : true ;
  }

  isAdmin() {
    return this.role === 1 ? true: false;
  }
  
  getUser(email){
    return this.http.get("http://localhost:8888/api/v1/getUser/"+email);
  }

  onSignup(email: string, name: string, password: string) {
    return this.http.post('http://localhost:8888/api/v1/newUser',
    ({ email : email , name: name, password: password}));
  }

  newmovie(name:string,image:string, category:string){
    return this.http.post('http://localhost:8888/api/v1/newMovie',
    ({ movie_name : name ,movie_image: image, movie_category: category}));
  }

  getmovie(){
    return this.http.get("http://localhost:8888/api/v1/getMovie");
  }

  delmovie(mname){
    return this.http.delete("http://localhost:8888/api/v1/deleteMovie/"+mname);
  }

  // updatemovie(upname){
  // return this.http.put("http://localhost:8888/api/v1/updateMovie/"+upname);
  // }

  getseries(){
    return this.http.get("http://localhost:8888/api/v1/getSeries");
  }
}


  
