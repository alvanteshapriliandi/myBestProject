import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

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
  langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailJadwalPage');
  }

}


