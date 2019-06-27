/**
 * Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MusicplayerPage } from './musicplayer.page';

const routes: Routes = [
  {
    path: '',
    component: MusicplayerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MusicplayerPage]
})
export class MusicplayerPageModule {}
