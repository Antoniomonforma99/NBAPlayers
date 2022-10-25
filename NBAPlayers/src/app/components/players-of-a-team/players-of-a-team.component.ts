import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/interfaces/team.interface';

const URL_IMAGEN = 'https://cdn.nba.com/logos/nba'

@Component({
  selector: 'app-players-of-a-team',
  templateUrl: './players-of-a-team.component.html',
  styleUrls: ['./players-of-a-team.component.css']
})
export class PlayersOfATeamComponent implements OnInit {

  

  @Input('team')
  team!: Team;

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  selectTeam(team: Team){
    this.team = team;
  }

  getPhoto() {
    return `${URL_IMAGEN}/${this.team.teamId}/global/L/logo.svg`
  }
  



}
