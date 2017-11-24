import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers}from '@angular/http';
@Injectable()
export class UserService {
  email= '';
  role:number;
  Shows = false;
  
  constructor(private http: Http) {
    var token = localStorage.getItem('token');
    const base64Url = token.split('.')[1];      
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    console.log(JSON.parse(window.atob(base64)).role);      
    this.email = JSON.parse(window.atob(base64)).email;      
    this.role = parseInt(JSON.parse(window.atob(base64)).role, 10);
   }
  isAdmin() {
    return this.role === 1 ? true: false;
  }

  setHeader() {    
    const headers = new Headers({      
      'Content-Type': 'application/json',      
      'Authorization': 'Bearer ' + localStorage.getItem('token')    
    });    
    const options = new RequestOptions({ headers: headers });    
    return options;  
  }
  
  getUser(email, password){
    return this.http.get("http://localhost:8888/api/v1/getUser/"+email+"/"+password, this.setHeader());
  }

  onSignup(email: string, name: string, password: string) {
    return this.http.post('http://localhost:8888/api/v1/newUser',
    ({ email : email , name: name, password: password}), this.setHeader());
  }

  new_movie(name:string,image:string, category:string){
    return this.http.post('http://localhost:8888/api/v1/newMovie',
    ({ movie_name : name ,movie_image: image, movie_category: category}), this.setHeader());
  }

  getmovie(){
    return this.http.get("http://localhost:8888/api/v1/getMovie", this.setHeader());
  }

  delmovie(mname){
    return this.http.delete("http://localhost:8888/api/v1/deleteMovie/"+mname, this.setHeader());
  }

  updatemovie(){
  return this.http.put("http://localhost:8888/api/v1/updateMovie/", this.setHeader());
  }

  getseries(){
    return this.http.get("http://localhost:8888/api/v1/getSeries", this.setHeader());
  }

  getseason(series_id){
    return this.http.get("http://localhost:8888/api/v1/getSeason/"+series_id, this.setHeader());
  }

  getepisode(series_id, season_id){
    return this.http.get("http://localhost:8888/api/v1/getEpisode/"+series_id+ "/"+ season_id, this.setHeader());
  }
  
}


  
