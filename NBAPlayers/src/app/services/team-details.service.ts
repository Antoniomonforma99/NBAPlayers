import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const API_BASE_URL = 'https://data.nba.net/data'


@Injectable({
  providedIn: 'root'
})
export class TeamDetailsService {

  constructor(private http: HttpClient) { }

  getById(id: string):Observable<any>{
    const url = `${API_BASE_URL}/team/${id}`;

    return this.http.get(url)
  }
}
