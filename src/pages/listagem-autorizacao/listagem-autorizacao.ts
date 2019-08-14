import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EnViPortalBeneficiario } from "../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import { BeneficiarioBennerService } from '../../providers/beneficiario/benner/beneficiario-benner.service';
import { StorageService } from '../../providers/storage.service';
import { AutorizacaoProvider } from '../../providers/autorizacao/autorizacao';
import { Autorizacao } from '../../models/autorizacao.model';

/**
 * Generated class for the ListagemAutorizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-listagem-autorizacao',
    templateUrl: 'listagem-autorizacao.html',
})
export class ListagemAutorizacaoPage {

    private beneficiarios: EnViPortalBeneficiario[] = [];
    private beneficiario: EnViPortalBeneficiario;
    private beneficiarioSelecionado: EnViPortalBeneficiario;
    private autorizacoes: Autorizacao[] = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private beneficiarioBennerService: BeneficiarioBennerService,
        private autorizacaoProvider: AutorizacaoProvider,
        private storageService: StorageService,
        private loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();

        this.storageService.getBeneficiario()
        .then(beneficiario => {
            this.beneficiario = beneficiario;
            this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(this.beneficiario.handleTitular)
                .subscribe(listaGrupoFamiliar => {
                    this.beneficiarios = listaGrupoFamiliar;
                    loader.dismiss();
                }, () => {
                    loader.dismiss();
                });
        }, () => {
            loader.dismiss();
        });
    }

    buscarAutorizacoes(handleTitular: number){
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();

        this.autorizacaoProvider.buscarAutoriazacao(handleTitular)
        .subscribe(listaAutorizacoes => {
            this.autorizacoes = listaAutorizacoes;
            loader.dismiss();
        }, () => {
            loader.dismiss();
        });
    }

    redirecionarDetalhe(autorizacaoSelecionada){
      console.log(autorizacaoSelecionada)
        this.navCtrl.push('DetalhesAutorizacaoPage', {'autorizacaoSelecionada': autorizacaoSelecionada});
    }

    redirecionarNegociacaoAut(autorizacaoSelecionada){
        this.navCtrl.push('ListagemNegociacaoPage', {'autorizacaoSelecionada': autorizacaoSelecionada});
    }

    buscarMesEscrito(mes){
        let meses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTRUBRO", "NOVEMBRO", "DEZEMBRO"]
        let mesInt = parseInt(mes) -1 ;
        return meses[mesInt];
    }
}
