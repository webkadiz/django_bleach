import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterService } from '../character.service';
import { Character } from '../serie.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = []
  searchControl = new FormControl('')

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters
    })
  }

  get searchedCharacters() {
    console.log(this.searchControl)
    if (!this.searchControl.value) return this.characters

    return this.characters.filter(character => {
      return new RegExp(this.searchControl.value, 'i').test(character.name)
    })
  }

}
