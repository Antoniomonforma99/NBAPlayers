
import { Component, OnInit } from '@angular/core';
import { League, Team } from 'src/app/interfaces/team.interface';
import { TeamsListService } from 'src/app/services/teams-list.service';

const URL_IMAGEN = 'https://cdn.nba.com/logos/nba'

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teamList: Team[] = [];
  numPages: number = 1;

  constructor(private teamService: TeamsListService) { }

  ngOnInit(): void {
    this.getTeamPage(6);
  }

  getTeamPage(page : number){
    this.teamService.getTeamList(page,'2022').subscribe(resp => {
      this.teamList = [...resp.league.africa, ...resp.league.sacramento, 
        ...resp.league.standard, ...resp.league.utah, ...resp.league.vegas];

      this.numPages = Math.ceil(this.teamList.length / 100);
    })
  }

  getPhoto(obj: Team) {
    let id = obj.teamId;
    return `${URL_IMAGEN}/${id}/global/L/logo.svg`
  }


  counter(){
    return new Array(this.numPages);
  }



}
