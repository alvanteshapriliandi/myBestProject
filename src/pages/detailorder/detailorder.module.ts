import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailorderPage } from './detailorder';

@NgModule({
  declarations: [
    DetailorderPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailorderPage),
  ],
})
export class DetailorderPageModule {}
