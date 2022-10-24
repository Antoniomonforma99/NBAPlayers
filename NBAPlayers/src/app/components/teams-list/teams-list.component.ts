
import { ThisReceiver } from '@angular/compiler';
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
  yearSelected!: number;
  yearList: number[] = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

  constructor(private teamService: TeamsListService) { }

  ngOnInit(): void {
    this.getTeamPage(6);
  }

  getTeamPage(page : number){
    this.teamService.getTeamList(page,2022).subscribe(resp => {
      this.teamList = [...resp.league.africa, ...resp.league.sacramento, 
        ...resp.league.standard, ...resp.league.utah, ...resp.league.vegas];
    });
    return this.teamList;
  }

  getPhoto(obj: Team) {
    let id = obj.teamId;
    return `${URL_IMAGEN}/${id}/global/L/logo.svg`
  }


  counter(){
    return new Array(this.numPages);
  }

  filterByYear(page: number, yearSelected: number){
    
      this.teamService.getTeamList(page, yearSelected).subscribe(resp => {
        this.teamList = [...resp.league.standard];
        if(resp.league.africa) {
          this.teamList = [...this.teamList, ...resp.league.africa];
        }
        if(resp.league.sacramento) {
          this.teamList = [...this.teamList, ...resp.league.sacramento];
        }
        if(resp.league.utah) {
          this.teamList = [...this.teamList, ...resp.league.utah];
        }
        if(resp.league.vegas) {
          this.teamList = [...this.teamList, ...resp.league.vegas];
        }
      });

    
  }



}
