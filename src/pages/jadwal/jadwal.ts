import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailJadwalPage } from '../detail-jadwal/detail-jadwal';

/**
 * Generated class for the JadwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwal',
  templateUrl: 'jadwal.html',
})
export class JadwalPage {

  items = [];
  facilitation = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'id' : '1',
        'title': 'PT. Travel Umrah A',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '10,000,000',
        'date' : '10 Oktober 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA',
      },
      {
        'id' : '2',
        'title': 'PT. Travel Umrah B',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '11,000,000',
        'date' : '11 Oktober 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'id' : '3',
        'title': 'PT. Travel Umrah C',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '12,000,000',
        'date' : '12 Oktober 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'id' : '4',
        'title': 'PT. Travel Umrah D',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '16,000,000',
        'date' : '14 Oktober 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'id' : '5',
        'title': 'PT. Travel Umrah E',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '11,500,000',
        'date' : '20 Oktober 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'id' : '6',
        'title': 'PT. Travel Umrah F',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '10,000,000',
        'date' : '30 Oktober 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'id' : '7',
        'title': 'PT. Travel Umrah G',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '10,000,000',
        'date' : '20 November 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'id' : '8',
        'title': 'PT. Travel Umrah H',
        'poin' : 'Dapatkan 10 Poin',
        'time' : '10.00 wib',
        'time_manasik' : '2 minggu sebelum keberangkatan',
        'price' : '10,000,000',
        'date' : '10 Desember 2018',
        'url': 'http://bizfold.com/wp-content/uploads/2017/09/5-pasti-umroh.png',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(DetailJadwalPage, {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalPage');
  }

}


