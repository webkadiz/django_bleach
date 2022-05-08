import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Film, FilmService } from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: Film | null = null;
  filmLoad: boolean = false;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const filmIdStr = this.route.snapshot.paramMap.get('filmId') || '1';
    const filmId = parseInt(filmIdStr);

    this.filmService.getFilmById(filmId).subscribe((film) => {
      this.filmLoad = true

      if (!film.id) this.film = null
      else this.film = film;
    });
  }

  getPlayer() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.film?.player || '');
  }
}
