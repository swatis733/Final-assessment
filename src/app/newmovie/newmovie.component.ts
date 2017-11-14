import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.css']
})
export class NewmovieComponent implements OnInit {

  constructor(private service: UserService, private router : Router) { }
  public movie:any=[];

  ngOnInit() {
    this.service.getmovie().subscribe(res=>{this.movie=JSON.parse(res.text())
    console.log(this.movie);
    })
  }

}
