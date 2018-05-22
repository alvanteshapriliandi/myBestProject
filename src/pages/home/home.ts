<<<<<<< HEAD
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { PanduanPage } from '../panduan/panduan';
import { CekjadwalPage } from '../cekjadwal/cekjadwal';
=======
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
>>>>>>> fa2a1f6badf48e5c4d1cc1b4561bc203a1e78e1c

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
<<<<<<< HEAD
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailorderPage');
  }

  cekjadwal() {
    this.navCtrl.push(CekjadwalPage);
  }
=======
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  checkSchedule() {
    this.navCtrl.push(AddOrderPage);
  }

>>>>>>> fa2a1f6badf48e5c4d1cc1b4561bc203a1e78e1c
}
