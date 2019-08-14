import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import {BoletoSapiens} from "../../../models/boleto-sapiens.model";
import {ExtratoCabesp} from "../../../models/extrato-cabesp.model";
import {SegundaViaBoletoService} from "../../../providers/segunda-via-boleto.service";
import {ToastHelper} from "../../../helpers/toast.helper";

@IonicPage()
@Component({
    selector: 'page-extrato-cabesp-boleto',
    templateUrl: 'extrato-cabesp-boleto.html'
})
export class ExtratoCabespBoletoPage {

    private boletoSapiens: BoletoSapiens;
    listaExtratoCabesp: ExtratoCabesp[] = [];

    constructor(private segundaViaBoletoService: SegundaViaBoletoService,
                private loadingCtrl: LoadingController,
                private navParams: NavParams,
                private toastHelper: ToastHelper,
                private navCtrl: NavController) {

    }

    ionViewDidLoad() {
        this.boletoSapiens = this.navParams.get('BoletoSapiens');
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.segundaViaBoletoService.buscarExtratoCabesp(this.boletoSapiens.numTitulo).subscribe((lista: ExtratoCabesp[]) => {
            if (lista.length) {
                this.listaExtratoCabesp = lista;
                loader.dismiss();
            } else {
                loader.dismiss().then(() => {
                    this.toastHelper.notificacaoMensagem('Não há dados disponíveis para o extrato desejado');
                    this.navCtrl.pop();
                });
            }
        }, error => {
            loader.dismiss().then(() => {
                this.toastHelper.notificacaoErroCarregarDados();
                this.navCtrl.pop();
            });
        });
    }
}