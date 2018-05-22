import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailJadwalPage } from './detail-jadwal';

@NgModule({
  declarations: [
    DetailJadwalPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailJadwalPage),
  ],
})
export class DetailJadwalPageModule {}
