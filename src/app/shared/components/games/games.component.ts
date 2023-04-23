import { Component, Input } from '@angular/core';

import { ModalService } from '../../uicomponents/modal/modal.service';
import { GameTypeImages, GameType } from '../../constants/game-type';
@Component({
  selector: 'actee-common-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  @Input() gamesList = [];
  gameObject: any = {};

  gameTypeImages = GameTypeImages;
  gameTypes = GameType;
  
  constructor(private _modalService: ModalService) {}

  ngOnInit() {
  }

  userTrackBy(index, game) {
    return game.id;
  }

  getName(name) {
    const nameObject = JSON.parse(name).find(
      (nameObject) => nameObject.code === 'en-us'
    );
    return (nameObject && nameObject.title) ?? 'no name';
  }

  onClick($event, game) {
    $event.preventDefault();
    this.gameObject = game;

    const pdfGrid = this.getPdfFilesArray(game);
    const theories = this.getAllTheories(game);
    this.gameObject = {
      ...this.gameObject,
      GuidePdfFiles: pdfGrid || [],
      theoryDescription: theories,
    };

    this._modalService.create();
  }

  getPdfFilesArray({ GuidePdfFiles }) {
    if (GuidePdfFiles === '') {
      return [];
    } else {
      return JSON.parse(GuidePdfFiles);
    }
  }

  getAllTheories({ gameTheories }) {
    return gameTheories.map((obj) => obj.Title).join(', ');
  }
}
