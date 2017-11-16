import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
 
  constructor(private service: UserService, private router : Router) { }
  
  ngOnInit() {    
  }
  
  
  logout() {
    this.service.email = '';
    this.router.navigate(["/home"]);
  }
  onclick(){
    console.log("button")
    this.router.navigate(['/newmovie']);
   }
   
  onclickseries(){
    console.log("button")
    this.router.navigate(['/tvseries']);
  }

  onclickedit(){
    this.router.navigate(['/edit']);
  }
  

}
