import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../season.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  seasons = this.seasonService.getSeasons();

  constructor(private seasonService: SeasonService) {}

  ngOnInit(): void {}
}
