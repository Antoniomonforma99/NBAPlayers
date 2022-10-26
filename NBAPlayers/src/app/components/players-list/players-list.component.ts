import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { Player } from 'src/app/interfaces/players-list.interface';
import { PlayersListService } from 'src/app/services/players-list.service';
import { PlayerProfileComponent } from '../player-profile/player-profile.component';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  dataSource: any;
  panelOpenState = false;
  playerList: Player[] = [];
  numPages = 0;
  pageActual = 1;
  buscar = '';
  constructor(private dialog:NgDialogAnimationService,private playerService: PlayersListService) {


  }

  ngOnInit(): void {

      this.getPlayersPage();

  }
  getUrlImagen(player: Player) {
    let id = player.personId;

    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`;
  }
  getPlayersPage() {
    this.playerService.getPlayers().subscribe((resp) => {
      this.playerList = resp.league.standard;
    });
  }
  mostrarDialog(playerDialog:Player){
    this.dialog.open(PlayerProfileComponent,{
      data:{player:playerDialog},
      position:{right:'0'},
      height:'100%',
      animation:{to:'left'},
      panelClass:'dialogPlayer'

    })
  }
  /*  buscador() {
    this.playerList.forEach(element => {
      if (element.firstName == this.buscar) {

       this.playerList=[element]
      }else {
        this.getPlayersPage();
      }
    });
  } */
}
