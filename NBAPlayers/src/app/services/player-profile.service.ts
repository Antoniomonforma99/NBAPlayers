import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayerProfileResponse } from '../interfaces/player-profile.interface';
import { Player, PlayersResponse } from '../interfaces/players-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerProfileService {


  constructor(private http:HttpClient) { }

  getPlayersProfile(year:String, player:Player):Observable<PlayerProfileResponse>{
    return  this.http.get<PlayerProfileResponse>(`${environment.apiBaseUrl}/data/10s/prod/v1/${year}/players/${player.personId}_profile.json`)
   }
}
