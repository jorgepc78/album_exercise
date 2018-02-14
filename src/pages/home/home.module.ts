import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { AlbumService } from '../../providers/album.service';

@NgModule({
  declarations: [
    HomePage,
  ],
  providers: [AlbumService],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}