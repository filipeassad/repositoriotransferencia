import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NegociacaoPage } from './negociacao';
import { BrMaskerModule } from 'brmasker-ionic-3';
import {NgxMaskIonicModule} from 'ngx-mask-ionic';

@NgModule({
  declarations: [
    NegociacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NegociacaoPage),
    BrMaskerModule,
    NgxMaskIonicModule.forRoot()
  ],
})
export class NegociacaoPageModule {}
