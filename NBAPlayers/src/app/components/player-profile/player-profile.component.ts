import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CareerSummary} from 'src/app/interfaces/player-profile.interface';
import { Player } from 'src/app/interfaces/players-list.interface';
import { PlayerProfileService } from 'src/app/services/player-profile.service';

export interface PlayerDialogData {
  player: Player;
}
@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css'],
})
export class PlayerProfileComponent implements OnInit {
  @Input() player: Player | undefined;
  careerSumary?: CareerSummary;

  constructor(
    private playerProfileService: PlayerProfileService,
    @Inject(MAT_DIALOG_DATA) public data: PlayerDialogData
  ) {}

  ngOnInit(): void {
    this.playerProfileService
      .getPlayersProfile('2020', this.data.player)
      .subscribe((results) => {
        this.careerSumary = results.league.standard.stats.careerSummary;
      });
  }
}
