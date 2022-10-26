import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/team.interface';
import { TeamDetailsService } from 'src/app/services/team-details.service';

const URL_IMAGEN = 'https://cdn.nba.com/logos/nba'

@Component({
  selector: 'app-players-of-a-team',
  templateUrl: './players-of-a-team.component.html',
  styleUrls: ['./players-of-a-team.component.css']
})

export class PlayersOfATeamComponent implements OnInit {  

  @Input() Team: Team | undefined;

  team: Team | undefined;

  constructor(
    private ruta: ActivatedRoute,
    private service: TeamDetailsService
    ) { }

  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam(){
    const teamId= this.ruta.snapshot.paramMap.get('id');
    
    console.log(teamId);
    console.log(typeof(teamId));

  }


  /*
  getPhoto() {
    return `${URL_IMAGEN}/${this.team.teamId}/global/L/logo.svg`
  }
  */



}
