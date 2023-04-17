import { Component } from '@angular/core';
import { isEmpty } from 'lodash';

import { GamesService } from './services/games.service';

@Component({
  selector: 'actee-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  gamesList$;
  filterCriteria = {
    searchkeyword: '',
    page: 1,
    pageSize: 10,
  };

  constructor(private _gamesService: GamesService) {}

  ngOnInit() {
    this.gamesList$ = this.searchGamesList();
  }
  onSearchHandler(event) {
    this.filterCriteria.searchkeyword = event;
    this.gamesList$ = this.searchGamesList();
  }

  searchGamesList() {
    return this._gamesService.getGames(this.filterCriteria);
  }
}
