import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddOrderPage } from '../pages/add-order/add-order';
import { PanduanPage } from '../pages/panduan/panduan';
import { LoginPage } from "../pages/login/login";
import { OrderPage } from "../pages/order/order";
import { DetailorderPage } from "../pages/detailorder/detailorder";
import { CekjadwalPage } from "../pages/cekjadwal/cekjadwal";
import { JadwalPage } from "../pages/jadwal/jadwal";
import { DetailJadwalPage } from "../pages/detail-jadwal/detail-jadwal";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    AddOrderPage,
    LoginPage,
    OrderPage,
    DetailorderPage,
    CekjadwalPage,
    PanduanPage,
    JadwalPage,
    DetailJadwalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ChatPage,
    TabsPage,
    AddOrderPage,
    LoginPage,
    OrderPage,
    DetailorderPage,
    CekjadwalPage,
    PanduanPage,
    JadwalPage,
    DetailJadwalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
