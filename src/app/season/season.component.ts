import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  public seasons: any = [];
  public series_id;
  constructor(private service: UserService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.series_id= this.route.snapshot.paramMap.get('series_id');
    this.service.getseason(this.series_id).subscribe(res=>{
      console.log(JSON.parse(res.text()));
      this.seasons=JSON.parse(res.text());
      // console.log("Swati hs" + res );
  });
}
episode(series_id,season_id :number){
  console.log(series_id,season_id);
  this.router.navigate(['/episode',series_id,season_id]); 
}
}
