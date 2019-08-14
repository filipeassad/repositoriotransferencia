import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe-fatura-negocicao',
  templateUrl: 'detalhe-fatura-negocicao.html',
})
export class DetalheFaturaNegocicaoPage {

  constructor(public navCtrl: NavController,
                public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheFaturaNegocicaoPage');
  }

}
