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
    this.stars = Array.from(Array(this.count).keys()).map(i => i < Math.round(this.rating))
  }

}
