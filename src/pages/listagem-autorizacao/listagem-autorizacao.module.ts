import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemAutorizacaoPage } from './listagem-autorizacao';

@NgModule({
  declarations: [
    ListagemAutorizacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListagemAutorizacaoPage),
  ],
})
export class ListagemAutorizacaoPageModule {}
