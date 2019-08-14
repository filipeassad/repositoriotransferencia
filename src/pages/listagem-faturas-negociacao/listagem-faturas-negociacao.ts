import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Negociacao } from '../../models/negociacao.model';
import { NegociacaoService } from '../../providers/negociacao.service';
import { Autorizacao } from '../../models/autorizacao.model';
import { NegociacaoItem } from '../../models/negociacao-item.model';
import { NegociacaoItemEstaticoService } from '../../providers/negociacao-item-estatico.service';


@IonicPage()
@Component({
    selector: 'page-listagem-faturas-negociacao',
    templateUrl: 'listagem-faturas-negociacao.html',
})
export class ListagemFaturasNegociacaoPage {

    private itensNegociacao: NegociacaoItem[] = [];
    private negociacaoSelecionada: Negociacao;
    private desabilitaAceitacao: boolean = true;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private negociacaoService: NegociacaoService,
                private loadingCtrl: LoadingController,
                private negociacaoItemEstaticoService: NegociacaoItemEstaticoService) {
        
        this.negociacaoSelecionada = this.navParams.get('negociacaoSelecionada');
        this.itensNegociacao = this.negociacaoSelecionada.tbSolNegociacaoItems;
    }

    ionViewDidLoad() {
    }

    ionViewDidEnter(){
        if(this.negociacaoItemEstaticoService.negociacaoItemAlterado){
            let itemNegociacaoAlterado = this.negociacaoItemEstaticoService.negociacaoItemAlterado;
            let index = 0;
                    
            for(let i = 0; i < this.itensNegociacao.length; i++){
                if(this.itensNegociacao[i].sniId = itemNegociacaoAlterado.sniId)
                    index = i;
            }
            this.itensNegociacao.splice(index, 1);
            this.itensNegociacao.push(itemNegociacaoAlterado);
            this.liberarAceitacao();
            this.negociacaoItemEstaticoService.negociacaoItemAlterado = null;
        }
        
    }

    aceitarTermos(){
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });

        this.negociacaoService.confirmarNegociacao(this.negociacaoSelecionada.snId)
        .subscribe(resultado => {
            this.navCtrl.pop();
            loader.dismiss();
        }, () => {
            loader.dismiss();
        });
    }

    liberarAceitacao(){
        let quantidadeNegociados = 0;
        for (let item of this.itensNegociacao) {
            if(item.sniCondicaopagamento != null)
                quantidadeNegociados++;
        }

        this.desabilitaAceitacao = quantidadeNegociados != this.itensNegociacao.length
                                    || (this.negociacaoSelecionada.snDataaceite != null || this.negociacaoSelecionada.snDataaceite != null) ;
    }

    rejeitarTermos(){
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });

        this.negociacaoService.rejeitarNegociacao(this.negociacaoSelecionada.snId)
        .subscribe(resultado => {
            this.navCtrl.pop();
            loader.dismiss();
        }, () => {
            loader.dismiss();
        });
    }

    negociacaoFatura(itemNegociacaoSelecionada){
        this.navCtrl.push('NegociacaoPage', {'itemNegociacaoSelecionada': itemNegociacaoSelecionada});
    }
}