import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NegociacaoService } from '../../providers/negociacao.service';
import { Negociacao } from '../../models/negociacao.model';
import { Autorizacao } from '../../models/autorizacao.model';

@IonicPage()
@Component({
    selector: 'page-listagem-negociacao',
    templateUrl: 'listagem-negociacao.html',
})
export class ListagemNegociacaoPage {

    private negociacoes: Negociacao[] = [];
    private autorizacaoSelecionada: Autorizacao;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private negociacaoService: NegociacaoService,
                private loadingCtrl: LoadingController) {

        this.autorizacaoSelecionada = this.navParams.get('autorizacaoSelecionada');
    }

    ionViewDidLoad() {

    }

    ionViewDidEnter(){
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });

        this.negociacaoService.buscarNegociacoes(this.autorizacaoSelecionada.handleAutorizacao)
        .subscribe(listaNegocicaoes => {
            this.negociacoes = listaNegocicaoes;
            loader.dismiss();
        }, () => {
            loader.dismiss();
        });
    }

    redirecionarNegociacao(negociacaoSelecionada){
        this.navCtrl.push('ListagemFaturasNegociacaoPage', {'negociacaoSelecionada': negociacaoSelecionada});
    }
}
