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
    this.service.getUser(email).subscribe(res=>{
      console.log('Inside service');
      this.user=JSON.parse(res.text());
      console.log(this.user.password);
      if(this.user==null){
        alert("Not a valid user");
      }
      else if(this.user.password == password){
        this.service.role=this.user.role;
        this.service.email=this.user.email;
        this.service.Shows=true;
        console.log("Entered next page");
        this.router.navigate(['/NextPage']);
      }
      else{
        alert("Password incorrect");
      }

    })
  }

}
