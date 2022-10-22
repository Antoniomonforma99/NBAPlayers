import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { Player } from 'src/app/interfaces/players-list.interface';
import { PlayersListService } from 'src/app/services/players-list.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  dataSource: any;
  panelOpenState = false;
  playerList: Player[] = [];
  numPages = 0;
  pageActual = 1;
  constructor(private playerService: PlayersListService) { }

  ngOnInit(): void {
    this.getPlayersPage();
  }
  getUrlImagen(player: Player) {

    let id = player.personId;

    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`


  }
  getPlayersPage() {


    this.playerService.getPlayers().subscribe((resp) => {
      this.playerList = resp.league.standard;


    });
  }

}
