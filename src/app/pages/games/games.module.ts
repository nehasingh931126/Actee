import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { GamesComponent } from './games.component';
import {GamesHeaderComponent} from './components/header.component';
  
const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GamesComponent,GamesHeaderComponent],
})
export class GamesModule { }