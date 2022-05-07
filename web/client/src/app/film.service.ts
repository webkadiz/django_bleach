import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Film {
  id: number;
  name: string;
  release_data: string;
  description: string;
  duration: string;
  preview: string;
}

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  films: Film[] = [];

  constructor(private http: HttpClient) {}

  getFilms() {
    if (this.films.length) return of<Film[]>(this.films)

    return this.http.get<Film[]>('http://localhost:8000/api/film/list');
  }
}
