import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemFaturasNegociacaoPage } from './listagem-faturas-negociacao';

@NgModule({
  declarations: [
    ListagemFaturasNegociacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListagemFaturasNegociacaoPage),
  ],
})
export class ListagemFaturasNegociacaoPageModule {}
