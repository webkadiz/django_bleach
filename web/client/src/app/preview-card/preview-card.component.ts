import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {

  @Input() img!: string;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
