import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user : any;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }
  onSignup(email: string, name: string, password: string) {
    console.log('In signup'); // For testing purpose only
    this.service.onSignup(email, name, password).subscribe(res=>{
      
      this.router.navigate(['/NextPage']);}
    );  
    
    }
  
    }
  

