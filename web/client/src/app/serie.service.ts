import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Serie {
  id: number;
  season_id: number;
  number: number;
  name: string;
  release_date: string;
  preview: string;
  player: string;
}

export interface Character {
  name: string;
  appear_serie_id: number;
}

interface SeriesBySeason {
  [key: string]: Serie[];
}

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  seriesBySeason: SeriesBySeason = {};

  constructor(private http: HttpClient) {}

  getSeriesBySeason(seasonId: string) {
    if (this.seriesBySeason[seasonId])
      return of<Serie[]>(this.seriesBySeason[seasonId]);

    return this.http.get<Serie[]>(
      `http://localhost:8000/api/season/${seasonId}/serie/list`
    );
  }

  getSerieById(serieId: number) {
    return this.http.get<Serie>(`http://localhost:8000/api/serie/${serieId}`);
  }

  getCharactersBySerie(serieId: number) {
    return this.http.get<Character[]>(
      `http://localhost:8000/api/serie/${serieId}/character/list`
    );
  }
}
