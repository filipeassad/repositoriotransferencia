import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CondicaoPagamentoService } from '../../providers/condicoes-pagamento.service';
import { NegociacaoItem } from '../../models/negociacao-item.model';
import { CondicaoPagamento } from '../../models/condicao-pagamento.model';

@IonicPage()
@Component({
	selector: 'page-detalhe-fatura-negocicao',
	templateUrl: 'detalhe-fatura-negocicao.html',
})
export class DetalheFaturaNegocicaoPage {

	private itemNegociacaoSelecionado: NegociacaoItem;
	private condicoesPagamento: CondicaoPagamento[] = [];
	private condicaoSelecionada: CondicaoPagamento;
    private temParcela: boolean;
    private temEntrada: boolean;
	
	constructor(public navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private condicaoPagamentoService: CondicaoPagamentoService,
		public navParams: NavParams) {

		this.itemNegociacaoSelecionado = this.navParams.get('itemNegociacaoSelecionada');
	}

	ionViewDidLoad() {
		let loader = this.loadingCtrl.create({
			content: "Por favor aguarde...",
		});

		this.condicaoPagamentoService.buscarCondicaoPagamento(this.itemNegociacaoSelecionado.sniTipotitulo)
			.subscribe(resultado => {
				this.condicoesPagamento = resultado;
				this.condicaoSelecionada = this.buscarCondicao(this.itemNegociacaoSelecionado.sniCondicaopagamento + '');
				this.atualizarForm();
				loader.dismiss();
			}, () => {
				loader.dismiss();
			});
	}

	buscarCondicao(codCpg: string){		
		var condicaoSelecionado = null;

		for (let codicao of this.condicoesPagamento) {
			if(codicao.codCpg == codCpg)
				condicaoSelecionado = codicao;
		}
		
		return condicaoSelecionado;
	}

	atualizarForm(){
		if(this.condicaoSelecionada.avista == 1){
            this.temParcela = false;
            this.temEntrada = false;
        }else{
            if(this.condicaoSelecionada.parcelas.length == 1)
                this.temEntrada = false;
            else
                this.temEntrada = true;
            this.temParcela = true;            
        }
	}
}
