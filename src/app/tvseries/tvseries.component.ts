import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {

  constructor(private service: UserService, private router : Router) { }
  public series:any=[];
  
    ngOnInit() {
      this.service.getseries().subscribe(res=>{this.series=JSON.parse(res.text())
      console.log(this.series);
      })
    }
  
  }
 