import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, ViewController   } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { PanduanPage } from '../panduan/panduan';
import { CekjadwalPage } from '../cekjadwal/cekjadwal';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController, 
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailorderPage');
  }

  cekjadwal() {
    this.navCtrl.push(CekjadwalPage);
  }

  openModal(){
    let modal = this.modalCtrl.create(AddOrderPage);
    modal.present();
  }

  
}
