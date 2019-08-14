import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
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

    private texto: string = 'Por intermédio do presente isntrumento particular, <NomeBeneficiario>, brasileiro(a), <EstadoCivil>, portador(a) do RG nº <RGBeneficiario>, <OrgãoEmissor>, cadastrado no CPF sob o nº <CPFBeneficiario>, capaz, residente e domiciliado na <Logradouro>, <Numero>, bairro <Bairro>, cidade <Cidade>, Estado <Estado>, CEP <Cep>, solicito o parcelamento do débito existente em favor da CAIXA DE ASSISTENCIA DOS SERVIDORES DO ESTADO DE MATO GROSSO DO SUL - CASSEMS, na quantia total de R$ <Valor Total> () referente à receita de Contribuição Agregado Básico a ser divido em <Parcelas> parcela(s) mensais consecutivas.\n\nEstou ciente de que sendo autorizado e referido parcelamento deverei manter meu endereço atualizado para o recebimento dos boletos bancários, assumindo toda a responsabilidade pela inexatidão do mesmo, e caso não receba os boletos até o dia do vencimento, estou ciente de que devo retirar a 2ª via junto ao setor competente na CASSEMS. Para o caso de descumprimento, valor atrasado será acrescido de multa de 2%, atualização monetária pelo indice IGP-M e juros legais no importe de 1% ao mês, bem como honorários advocatícios de cobrança, fixados em 10% do total devido.\n\nCampo Grande, <Data Atual>';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private negociacaoService: NegociacaoService,
                private loadingCtrl: LoadingController,
                private negociacaoItemEstaticoService: NegociacaoItemEstaticoService,
                private alertCtrl: AlertController) {
        
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

    mostrarTermosAceitacao(){
        let confirm = this.alertCtrl.create({
            title: 'SOLICITAÇÃO DE PARCELAMENTO DE DÍVIDA',
            message: this.texto,
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {
                        confirm.dismiss();                       
                    }
                },
                {
                    text: 'Aceitar',
                    handler: () => {
                        this.aceitarTermos();
                    }
                }
            ]
        });
        confirm.present();
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