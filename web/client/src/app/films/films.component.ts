import { Component, OnInit } from '@angular/core';
import { Film, FilmService } from '../film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
    });
  }
}
