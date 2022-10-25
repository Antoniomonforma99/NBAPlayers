import { Component, OnInit } from '@angular/core';
import {
  CareerSummary,
  Season,
} from 'src/app/interfaces/player-profile.interface';
import { PlayerProfileService } from 'src/app/services/player-profile.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css'],
})
export class PlayerProfileComponent implements OnInit {
  careerSumary: CareerSummary[] = [];
  season?: Season;
  constructor(private playerProfileService: PlayerProfileService) {}

  ngOnInit(): void {}

  mostrarPlayerProfile() {}
}
