import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheFaturaNegocicaoPage } from './detalhe-fatura-negocicao';

@NgModule({
  declarations: [
    DetalheFaturaNegocicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheFaturaNegocicaoPage),
  ],
})
export class DetalheFaturaNegocicaoPageModule {}
