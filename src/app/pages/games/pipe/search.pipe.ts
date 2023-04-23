import { Pipe, PipeTransform } from '@angular/core';
import { GameType } from 'src/app/shared/constants/game-type';
@Pipe({
  name: 'gamesearch',
})
export class GameSearchPipe implements PipeTransform {
  gameType = GameType;
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    
    const gameTypeMap = {};
    Object.keys(this.gameType).forEach((key) => {
      gameTypeMap[key] = this.gameType[key].toLowerCase();
    });


    const filteredItems = items.filter((item) => {
      const {
        Title,
        ModuleName,
        GameDesc,
        Name,
        gameTheories,
        GuidePdfFiles,
        TheoryTitle,
        GameType,
        Length,
        TheoryTitlePoeditorContext,
        caseLanguages
      } = item;

      const moduleGameType = gameTypeMap[ModuleName].toLowerCase();

      return (
        Title.toLowerCase().includes(searchText) ||
        moduleGameType.includes(searchText) ||
        GameDesc.toLowerCase().includes(searchText) ||
        (TheoryTitle !== null &&
          TheoryTitle.toLowerCase().includes(searchText)) ||
        GameType.toLowerCase().includes(searchText) ||
        Length.toLowerCase().includes(searchText) ||
        (TheoryTitlePoeditorContext !== null &&
          TheoryTitlePoeditorContext.toLowerCase().includes(searchText)) ||
        (Name &&
          JSON.parse(Name).some((name) =>
            name.title.toLowerCase().includes(searchText)
          )) ||
        (gameTheories &&
          gameTheories.some(
            (theoryObject) =>
              theoryObject.TitlePoeditorContext.includes(searchText) ||
              theoryObject.Title.includes(searchText)
          )) ||
        (GuidePdfFiles &&
          JSON.parse(GuidePdfFiles).some((pdf) =>
            pdf.FileName.toLowerCase().includes(searchText)
          )) ||
        (caseLanguages &&
          caseLanguages.some(
            (language) =>
              language.name.toLowerCase().includes(searchText) ||
              language.state.toLowerCase().includes(searchText)
          ))
      );
    });

    return filteredItems;
  }
}
