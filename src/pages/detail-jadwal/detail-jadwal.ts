import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JadwalPage } from '../jadwal/jadwal';

/**
 * Generated class for the DetailJadwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-jadwal',
  templateUrl: 'detail-jadwal.html',
})
export class DetailJadwalPage {
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailJadwalPage');
  }

}


