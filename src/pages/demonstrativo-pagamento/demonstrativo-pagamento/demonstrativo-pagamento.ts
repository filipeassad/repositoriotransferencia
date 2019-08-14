import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {BuscaDemonstrativoPagamentoTO} from "../../../models/to/busca-demonstrativo-pagamento.to.model";
import {DemonstrativoPagamento} from "../../../models/demonstrativo-pagamento.model";
import {ToastHelper} from "../../../helpers/toast.helper";
import {DemonstrativoPagamentoService} from "../../../providers/demonstrativo-pagamento.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {StorageService} from "../../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-demonstrativo-pagamento',
    templateUrl: 'demonstrativo-pagamento.html'
})
export class DemonstrativoPagamentoPage {

    private buscaDemonstrativoPagamentoTO: BuscaDemonstrativoPagamentoTO = new BuscaDemonstrativoPagamentoTO();
    private beneficiario: EnViPortalBeneficiario = new EnViPortalBeneficiario();
    listaDemonstrativoPagamento: DemonstrativoPagamento[] = [];

    constructor(private navParams: NavParams,
                private loadingCtrl: LoadingController,
                private storageService: StorageService,
                private toastHelper: ToastHelper,
                private demonstrativoPagamentoService: DemonstrativoPagamentoService,
                private navCtrl: NavController) {

    }

    ionViewDidLoad(): void {
        this.buscaDemonstrativoPagamentoTO = this.navParams.get('buscaDemonstrativoPagamentoTO');
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(beneficiario => {
                this.beneficiario = beneficiario;
                this.demonstrativoPagamentoService.buscarDemonstrativoPagamento(this.beneficiario.cpf, parseInt(this.buscaDemonstrativoPagamentoTO.ano)).subscribe((lista: DemonstrativoPagamento[]) => {
                    if (lista.length) {
                        this.listaDemonstrativoPagamento = lista;
                        loader.dismiss();
                    } else {
                        this.toastHelper.notificacaoMensagem('Não há dados para o ano desejado');
                        loader.dismiss();
                        this.navCtrl.pop();
                    }
                }, () => {
                    this.toastHelper.notificacaoErroCarregarDados();
                    loader.dismiss();
                    this.navCtrl.pop();
                });
            }, () => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                this.navCtrl.pop();
            });
    }

}