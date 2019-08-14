import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemNegociacaoPage } from './listagem-negociacao';

@NgModule({
  declarations: [
    ListagemNegociacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListagemNegociacaoPage),
  ],
})
export class ListagemNegociacaoPageModule {}
