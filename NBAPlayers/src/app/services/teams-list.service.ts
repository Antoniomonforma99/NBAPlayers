import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponse } from '../interfaces/team.interface';

const API_BASE_URL = 'https://data.nba.net/data'

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  constructor(private http: HttpClient) { }

  public getTeamList(numPage: number, year: string): Observable<TeamResponse>{
    
    return this.http.get<TeamResponse>(`${API_BASE_URL}/10s/prod/v1/${year}/teams.json?page=${numPage}`)
  }
}
