import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { AlbumService } from '../../providers/album.service';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public albumList: any[] = [];
  constructor(
    public navCtrl: NavController,
    public albumService: AlbumService
    ) {}

  ionViewDidLoad() {

    this.albumService
      .getLastAlbums()
      .subscribe(
      data => {
        let total = data.json().length;
        let datos = data.json();
        
        this.albumList.push(
          {
            num: 1,
            data: datos[total-1]
          }
        );
        this.albumList.push(
          {
            num: 2,
            data: datos[total-2]
          }
        );
        this.albumList.push(
          {
            num: 3,
            data: datos[total-3]
          }
        );
      });
  }

  goDetail(detail: any): void {
    this.navCtrl.push('DetailPage', {
      detail: detail
    });
  }


}
