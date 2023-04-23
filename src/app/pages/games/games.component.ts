import { Component } from '@angular/core';
import { isEmpty } from 'lodash';

import { GamesService } from './services/games.service';
import { ModalService } from 'src/app/shared/uicomponents/modal/modal.service';

@Component({
  selector: 'actee-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  gamesList$;
  searchTerm = '';
  constructor(
    private _gamesService: GamesService,
    private _modalService: ModalService
  ) {}

  ngOnInit() {
    this.gamesList$ = this._gamesService.getGames();
  }

  onSearchHandler(event) {
    console.log(event, "HERE IS THE EVENT");
    this.searchTerm = event;
  }
}
