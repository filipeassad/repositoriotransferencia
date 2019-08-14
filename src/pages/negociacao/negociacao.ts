import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NegociacaoItem } from '../../models/negociacao-item.model';
import { CondicaoPagamentoService } from '../../providers/condicoes-pagamento.service';
import { CondicaoPagamento } from '../../models/condicao-pagamento.model';
import { ToastHelper } from '../../helpers/toast.helper';
import { NegociacaoItemEstaticoService } from '../../providers/negociacao-item-estatico.service';

/**
 * Generated class for the NegociacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-negociacao',
    templateUrl: 'negociacao.html',
})
export class NegociacaoPage {

    private itemNegociacaoSelecionado: NegociacaoItem;
    private condicoesPagamento: CondicaoPagamento[] = [];
    private condicaoPagamentoSelecionada: CondicaoPagamento;
    private temParcela: boolean;
    private temEntrada: boolean;
    private parcela: number;
    private entrada: number;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private loadingCtrl: LoadingController,
        private condicaoPagamentoService: CondicaoPagamentoService,
        private toastHelper: ToastHelper,
        private negociacaoItemEstaticoService: NegociacaoItemEstaticoService) {

        this.itemNegociacaoSelecionado = this.navParams.get('itemNegociacaoSelecionada');

    }    

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });

        this.condicaoPagamentoService.buscarCondicaoPagamento(this.itemNegociacaoSelecionado.sniTipotitulo)
        .subscribe(resultado => {
            this.condicoesPagamento = resultado;
            loader.dismiss();
        }, () => {
            loader.dismiss();
        });
    }

    selecionaCondicaoPagamento(){     

        if(this.condicaoPagamentoSelecionada.avista == 1){
            this.temParcela = false;
            this.temEntrada = false;
        }else{
            if(this.condicaoPagamentoSelecionada.parcelas.length == 1)
                this.temEntrada = false;
            else
                this.temEntrada = true;
            this.temParcela = true;            
        }
    }

    atualizaParcela(){
        if(this.temParcela)
            this.parcela = (this.itemNegociacaoSelecionado.sniValortotal - this.entrada) / this.condicaoPagamentoSelecionada.parcelas[1].qtdPar;
        else
            this.parcela = 0;        
    }

    confirmarCondicao(){        
        this.validaCampos();

        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });

        let quantidadeParcelas = this.temEntrada ? this.condicaoPagamentoSelecionada.parcelas[1].qtdPar : 1;
        this.condicaoPagamentoService.confirmarCondicaoNegociacao(this.itemNegociacaoSelecionado.sniId, 
                                                                    this.condicaoPagamentoSelecionada.codCpg, 
                                                                    this.entrada, 
                                                                    this.parcela, 
                                                                    quantidadeParcelas)
        .subscribe(resultado => {

            this.itemNegociacaoSelecionado.sniCondicaopagamento = +this.condicaoPagamentoSelecionada.codCpg;
            this.negociacaoItemEstaticoService.negociacaoItemAlterado = this.itemNegociacaoSelecionado;
            
            loader.dismiss();
            this.navCtrl.pop();
        }, () => {
            loader.dismiss();
        });
    }

    validaCampos(){
        if(!this.condicaoPagamentoSelecionada){
            this.toastHelper.notificacaoMensagem('Condição de pagamento não foi selecionada.');
            return;
        }

        if(this.temEntrada && !this.entrada){
            this.toastHelper.notificacaoMensagem('A entrada deve ser informada.');
            return;
        }

        if(this.temParcela && !this.parcela){
            this.toastHelper.notificacaoMensagem('A parcela deve ser informada.');
            return;
        }
    }

    cancelar(){
        this.navCtrl.pop();
    }
}
