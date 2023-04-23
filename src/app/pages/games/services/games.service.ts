import { Injectable } from '@angular/core';
import * as gamesData from './gamesData.json';  
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GamesService {
  gamesList = gamesData;
  constructor() {
  }

  getGames() {
    return of(this.gamesList.Data);
  }
}
