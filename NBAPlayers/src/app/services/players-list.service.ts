import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayersResponse } from '../interfaces/players-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersListService {

  constructor(private http:HttpClient ){

   }
   getPlayers():Observable<PlayersResponse>{
    return  this.http.get<PlayersResponse>(`${environment.apiBaseUrl}/data/10s/prod/v1/2022/players.json`)
   }
}
