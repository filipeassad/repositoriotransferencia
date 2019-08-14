import {Component} from "@angular/core";
import {LoadingController, NavParams, NavController, IonicPage} from "ionic-angular";
import {Prestador} from "../../../models/prestador.model";
import {BuscaPrestadorTO} from "../../../models/to/busca-prestador.to.model";
import {PrestadorService} from "../../../providers/prestador.service";
import {ToastHelper} from "../../../helpers/toast.helper";

@IonicPage()
@Component({
    selector: 'page-busca-prestador-lista',
    templateUrl: 'busca-prestador-lista.html'
})
export class BuscaPrestadorListaPage {

    listaPrestadores: Prestador[] = [];
    private _listaPrestadores: Prestador[] = [];
    buscaPrestadorTO: BuscaPrestadorTO = new BuscaPrestadorTO();

    constructor(private prestadorService: PrestadorService,
                private loadingCtrl: LoadingController,
                private navParams: NavParams,
                private navCtrl: NavController,
                private toastHelper: ToastHelper) {
        this.buscaPrestadorTO = this.navParams.get('BuscaPrestadorTO');

    }


    ionViewDidLoad(): void {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.prestadorService.buscarPrestador(this.buscaPrestadorTO.nome, this.buscaPrestadorTO.municipio, this.buscaPrestadorTO.tipoPrestador, this.buscaPrestadorTO.especialidade).subscribe((lista: Prestador[]) => {
            if (lista.length) {
                this.listaPrestadores = lista as Prestador[];
                this._listaPrestadores = this.listaPrestadores;
                loader.dismiss();
            } else {
                loader.dismiss();
                this.toastHelper.notificacaoMensagem('Não foram encontrados dados para a busca desejada');
                this.navCtrl.pop();
            }
        }, error => {
            loader.dismiss();
            this.toastHelper.notificacaoErroCarregarDados();
        });
    }

    buscarPrestador(event: any) {
        this.listaPrestadores = this._listaPrestadores;
        let val = event.target.value;
        if (val && val.trim() != '') {
            this.listaPrestadores = this.listaPrestadores.filter((prestador: Prestador) => {
                return (prestador.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    visualizarPrestador(prestador: Prestador) {
        this.navCtrl.push('PrestadorPage', {'Prestador': prestador});
    }

    recarregarDados(refresher) {
        this.prestadorService.buscarPrestador(this.buscaPrestadorTO.nome, this.buscaPrestadorTO.municipio, this.buscaPrestadorTO.tipoPrestador, this.buscaPrestadorTO.especialidade).subscribe((lista: Prestador[]) => {
            this.listaPrestadores = lista as Prestador[];
            this._listaPrestadores = this.listaPrestadores;
            refresher.complete();
        }, error => {
            this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    }
}