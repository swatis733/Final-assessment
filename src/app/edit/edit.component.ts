import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service: UserService, private router : Router) { }

  ngOnInit() {

  }
  newmovie(name:string,image:string, category:string) {
    this.service.new_movie(name,image,category).subscribe();  
    alert("Movie added successfully");
    }

  delmovie(mname:string) {
    this.service.delmovie(mname).subscribe();  
    alert("Movie deleted successfully");
  } 

  updatemovie(){
    this.service.updatemovie().subscribe();  
    alert("Movie updated successfully");
  }
}
