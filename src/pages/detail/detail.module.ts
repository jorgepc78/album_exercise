import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { AlbumDetailService } from '../../providers/album-detail.service';

@NgModule({
  declarations: [
    DetailPage,
  ],
  providers: [AlbumDetailService],
  imports: [
    IonicPageModule.forChild(DetailPage),
  ],
})
export class DetailPageModule {}
