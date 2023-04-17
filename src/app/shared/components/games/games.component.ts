import { Component, Input } from '@angular/core';

@Component({
  selector: 'actee-common-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  @Input() gamesList = [];
  constructor() {}

  ngOnInit() {
    console.log(this.gamesList)
  }

  userTrackBy(index, game) {
    return game.id;
  }
}
