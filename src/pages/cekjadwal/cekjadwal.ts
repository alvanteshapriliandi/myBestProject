import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { JadwalPage } from '../jadwal/jadwal';

/**
 * Generated class for the CekjadwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cekjadwal',
  templateUrl: 'cekjadwal.html',
})
export class CekjadwalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CekjadwalPage');
  }

  jadwal() {
    let loader = this.loadingCtrl.create({
      content: "Mohon tunggu sebentar",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(JadwalPage);
  }

}
