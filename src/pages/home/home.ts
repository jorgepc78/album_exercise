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
        this.albumList = data.json();
      });


  }

}
