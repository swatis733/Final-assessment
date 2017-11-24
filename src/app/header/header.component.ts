import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public route: Router, private service: UserService) { }

  ngOnInit() {
  }
  login() {
    this.route.navigate(['/login']);
  }
  signup() {
    this.route.navigate(['/signup']);
  }
  home() {
    this.route.navigate(['/home']);
  }

  logout() {
    this.service.email = '';
    this.service.Shows=false;
    this.route.navigate(["/home"]);
  }
}
