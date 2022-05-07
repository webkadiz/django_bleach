import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Serie {
  number: number;
  name: string;
  release_data: string;
  preview: string;
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
    if (this.seriesBySeason[seasonId]) return of<Serie[]>(this.seriesBySeason[seasonId]);

    return this.http.get<Serie[]>(
      `http://localhost:8000/api/season/${seasonId}/serie/list`
    );
  }
}
