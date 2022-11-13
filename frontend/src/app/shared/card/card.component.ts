import { Component, Input, OnInit } from '@angular/core';
import { Inew } from '../interfaces/inew';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input () data: Inew = {
    title: "",
    description: "",
    date: new Date(),
    content: "",
    author: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
