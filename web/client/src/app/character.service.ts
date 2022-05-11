import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './serie.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<Character[]>('http://localhost:8000/api/character/list')
  }
}
