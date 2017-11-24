import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any;
  constructor(private service: UserService, private router: Router) { }
  ngOnInit() {
  }
  loginonclick(email,password){
    console.log(" in login");
    this.service.getUser(email,password).subscribe(res=>{
      console.log('Inside service');
      this.user=JSON.parse(res.text());
      console.log(this.user);
      var token =this.user.token;
      localStorage.setItem('token', this.user.token);
      if(this.user.success) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        console.log(JSON.parse(window.atob(base64)).role );      
        this.service.email = JSON.parse(window.atob(base64)).email;      
        this.service.role = parseInt(JSON.parse(window.atob(base64)).role, 10);
        this.service.Shows=true;
        // localStorage.getItem('token');
        //this.service.shows1=true;
        console.log("Entered next page");
        this.router.navigate(['/NextPage']);
      }
      else{
           alert(this.user.body);
       }
      // else{
      //   alert("Password incorrect");
      // }

    })
  }

}
