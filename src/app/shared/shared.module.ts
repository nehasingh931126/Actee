import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { ModalComponent } from './uicomponents/modal/modal.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
@NgModule({
  declarations: [GamesComponent, EllipsisPipe, ModalComponent],
  imports: [CommonModule],
  exports: [CommonModule, GamesComponent, EllipsisPipe, ModalComponent],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
