import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {BoletoSapiens} from "../../../models/boleto-sapiens.model";
import {SegundaViaBoletoService} from "../../../providers/segunda-via-boleto.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {StorageService} from "../../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-lista-segunda-via-boleto',
    templateUrl: 'lista-segunda-via-boleto.html'
})
export class ListaSegundaViaBoletoPage {

    listaBoletosEmAberto: BoletoSapiens[] = [];
    private beneficiario: EnViPortalBeneficiario;

    constructor(private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private segundaViaBoletoService: SegundaViaBoletoService,
                private storageService: StorageService,
                private toastHelper: ToastHelper) {

    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(beneficiario => {
                this.beneficiario = beneficiario;
                this.segundaViaBoletoService.buscarListaBoletosEmAberto(this.beneficiario.handleTitular).subscribe((lista: BoletoSapiens[]) => {
                    if (lista != null) {
                        if (lista.length) {
                            lista = this.calcularDataVencimento(lista);
                            this.listaBoletosEmAberto = lista;
                            loader.dismiss();
                        } else {
                            loader.dismiss();
                            this.toastHelper.notificacaoMensagem('Não possui boletos em aberto');
                            this.navCtrl.setRoot('HomePage');
                        }
                    } else {
                        loader.dismiss();
                        this.toastHelper.notificacaoMensagem('Não possui boletos em aberto');
                        this.navCtrl.setRoot('HomePage');
                    }
                }, () => {
                    loader.dismiss();
                    this.toastHelper.notificacaoErroCarregarDados();
                    this.navCtrl.setRoot('HomePage');
                });
            }, () => {
                loader.dismiss();
                this.toastHelper.notificacaoErroCarregarDados();
                this.navCtrl.setRoot('HomePage');
            });
    }

    visualizarBoleto(boleto: BoletoSapiens) {
        this.navCtrl.push('SegundaViaBoletoPage', {boleto: boleto});
    }

    calcularDataVencimento(lista: BoletoSapiens[]) {
        return lista.map((boleto: BoletoSapiens) => {
            boleto.dataVencimentoCalculado = new Date(boleto.vctOri_data);
            return boleto;
        });
    }

    recarregarDados(refresher) {
        this.segundaViaBoletoService.buscarListaBoletosEmAberto(this.beneficiario.handleTitular).subscribe((lista: BoletoSapiens[]) => {
            if (lista.length) {
                lista = this.calcularDataVencimento(lista);
                this.listaBoletosEmAberto = lista;
                refresher.complete();
            } else {
                refresher.complete();
                this.toastHelper.notificacaoMensagem('Não possui boletos em aberto');
                this.navCtrl.setRoot('HomePage');
            }
        }, () => {
            refresher.complete();
            this.toastHelper.notificacaoErroCarregarDados();
            this.navCtrl.setRoot('HomePage');
        });
    }

}
