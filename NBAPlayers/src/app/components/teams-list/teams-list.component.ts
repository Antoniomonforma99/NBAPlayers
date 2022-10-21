
import { Component, OnInit } from '@angular/core';
import { League, Team } from 'src/app/interfaces/team.interface';
import { TeamsListService } from 'src/app/services/teams-list.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teamList: Team[] = [];
  numPages: number = 0;

  constructor(private teamService: TeamsListService) { }

  ngOnInit(): void {
    this.getTeamPage(6);
  }

  getTeamPage(page : number){
    this.teamService.getTeamList(page,'2022').subscribe(resp => {
      this.teamList = [...resp.league.africa, ...resp.league.sacramento, 
        ...resp.league.standard, ...resp.league.utah, ...resp.league.vegas];

      this.numPages = Math.ceil(this.teamList.length / 10);
    })
  }

}
