import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Season {
  id: number;
  number: number;
  release_date: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeasonService {
  seasons: Season[] = [];

  constructor(private http: HttpClient) {}

  getSeasons() {
    if (this.seasons.length) return of<Season[]>(this.seasons)

    return this.http.get<Season[]>('http://localhost:8000/api/season/list');
  }
}
