import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
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
    
    season(series_id: number){
      console.log("ara kya");
        this.router.navigate(['/season',series_id]); 
  }
}
