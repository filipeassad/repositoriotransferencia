import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Autorizacao } from '../../models/autorizacao.model';

/**
 * Generated class for the DetalhesAutorizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-detalhes-autorizacao',
    templateUrl: 'detalhes-autorizacao.html',
})
export class DetalhesAutorizacaoPage {

    private autorizacaoSelecionada: Autorizacao;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.autorizacaoSelecionada = this.navParams.get('autorizacaoSelecionada');
    }

    ionViewDidLoad() {
        
    }

}
