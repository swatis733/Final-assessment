import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  constructor(private service: UserService, private route : ActivatedRoute) { }

  ngOnInit() {
  }

}
