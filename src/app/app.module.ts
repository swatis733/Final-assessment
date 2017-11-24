import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { Router,RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UserService} from './user.service';
import { HttpModule } from '@angular/http';
import { NextpageComponent } from './nextpage/nextpage.component';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { EditComponent } from './edit/edit.component';
import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'NextPage' , component: NextpageComponent},
  { path: '' , component: HomeComponent},
  { path: 'newmovie', component: NewmovieComponent },
  { path: 'tvseries', component:TvseriesComponent },
  { path: 'edit', component: EditComponent },
  { path: 'season/:series_id', component: SeasonComponent },
  { path: 'episode/:series_id/:season_id', component: EpisodeComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    NextpageComponent,
    NewmovieComponent,
    TvseriesComponent,
    EditComponent,
    SeasonComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
