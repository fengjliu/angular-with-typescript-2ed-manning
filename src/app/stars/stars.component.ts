import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() count = 5
  @Input() rating = 0
  stars: boolean[] = []

  constructor() { }

  ngOnInit() {
    this.stars = [1, 2, 3, 4, 5].map(i => i > this.rating)
  }

}
