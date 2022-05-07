import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  series = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
  ];

  constructor(private http: HttpClient) {}

  getSeries() {
    return this.series
  }
}
