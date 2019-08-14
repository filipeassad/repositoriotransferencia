import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesAutorizacaoPage } from './detalhes-autorizacao';

@NgModule({
  declarations: [
    DetalhesAutorizacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesAutorizacaoPage),
  ],
})
export class DetalhesAutorizacaoPageModule {}
