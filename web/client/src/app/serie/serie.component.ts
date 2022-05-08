import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Serie, SerieService } from '../serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit {
  serie: Serie | null = null;
  serieLoad: boolean = false;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const serieIdStr = this.route.snapshot.paramMap.get('serieId') || '1';
    const serieId = parseInt(serieIdStr);

    this.serieService.getSerieById(serieId).subscribe((serie) => {
      this.serieLoad = true

      if (!serie.id) this.serie = null
      else this.serie = serie;
    });
  }

  getPlayer() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.serie?.player || '');
  }
}
