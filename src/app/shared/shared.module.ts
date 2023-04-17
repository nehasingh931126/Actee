import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
@NgModule({
  declarations: [GamesComponent, EllipsisPipe],
  imports: [CommonModule],
  exports: [CommonModule, GamesComponent, EllipsisPipe],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
