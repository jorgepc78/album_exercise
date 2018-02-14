import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlbumDetailService } from '../../providers/album-detail.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public photosAlbum: any;
  public detailAlbum: any;
  public numAlbum : number = 1;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public albumDetailService: AlbumDetailService
    ) {}

  ionViewDidLoad() {
    this.detailAlbum = this.navParams.get('detail');
    this.numAlbum = this.detailAlbum.num;

    this.albumDetailService
      .geDetailAlbum(this.detailAlbum.data.id)
      .subscribe(
      data => {
        this.photosAlbum = data.json();
      });

  }

}
