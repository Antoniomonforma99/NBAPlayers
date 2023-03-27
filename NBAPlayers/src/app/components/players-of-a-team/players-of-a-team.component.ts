import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/players-list.interface';
import { Team } from 'src/app/interfaces/team.interface';
import { PlayersListService } from 'src/app/services/players-list.service';

const URL_IMAGEN = 'https://cdn.nba.com/logos/nba'


@Component({
  selector: 'app-players-of-a-team',
  templateUrl: './players-of-a-team.component.html',
  styleUrls: ['./players-of-a-team.component.css']
})



export class PlayersOfATeamComponent implements OnInit {  
  teamId = '';
  team!: Team;
  playerList: Player[] = [];

  constructor(
    private service: PlayersListService,
    private ruta: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.teamId = this.ruta.snapshot.paramMap.get('id')!;
    this.getPlayers();
    
  }



  getPlayers(){
    this.service.getPlayers().subscribe(resp => {
      resp.league.standard.forEach(player => {
        if (player.teamId == this.teamId) {
          debugger
          this.playerList.push(player);
          
        }
      })
    })
  }


  getUrlImagen(player: Player) {

    let id = player.personId;

    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`


  }


  getPhoto() {
    return `${URL_IMAGEN}/${this.teamId}/global/L/logo.svg`
  }
 



}
