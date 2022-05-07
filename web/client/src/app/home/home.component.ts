import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { SeasonService, Season } from '../season.service';
import { Serie, SerieService } from '../serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  seasons: Season[] = [];
  currentSeasonNumber: number = 1;
  currentSeries: Serie[] = [];

  constructor(
    private seasonService: SeasonService,
    private serieService: SerieService
  ) {}

  ngOnInit(): void {
    this.seasonService.getSeasons().subscribe((seasons) => {
      this.seasons = seasons;
    });

    this.serieService
      .getSeriesBySeason(this.currentSeasonNumber.toString())
      .subscribe((series) => {
        this.currentSeries = series;
      });
  }

  onSelectTab(event: TabDirective, seasonNumber: number) {
    let seasonId;

    if (!event.id) seasonId = '1';
    else seasonId = event.id;

    this.currentSeasonNumber = seasonNumber;
    this.serieService.getSeriesBySeason(seasonId).subscribe((series) => {
      this.currentSeries = series;
    });
  }

  isCurrentSeason(seasonNumber: number) {
    return seasonNumber === this.currentSeasonNumber;
  }
}
