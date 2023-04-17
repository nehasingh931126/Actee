import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from './pages/games/games.module';
import { GamesService } from './pages/games/services/games.service';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GamesModule, SharedModule],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
