import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
  login(){
this.route.navigate(['/login']);
  }
  signup(){
this.route.navigate(['/signup']);

  }
  home(){
    this.route.navigate(['/home']);
    
      }
}
