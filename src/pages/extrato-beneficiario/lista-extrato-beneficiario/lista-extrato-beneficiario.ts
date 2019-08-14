import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {BuscarExtratoBeneficiarioTO} from "../../../models/to/buscar-extrato-beneficiario.to.model";
import {ExtratoBeneficiario} from "../../../models/extrato-beneficiario.model";
import {ExtratoBeneficiarioService} from "../../../providers/extrato-beneficiario.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {TipoBuscaExtratoBeneficiarioEnum} from "../../../enums/tipo-busca-extrato-beneficiario.enum";
import {StorageService} from "../../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-lista-extrato-beneficiario',
    templateUrl: 'lista-extrato-beneficiario.html'
})
export class ListaExtratoBeneficiarioPage {

    private buscarExtratoBeneficiarioTO: BuscarExtratoBeneficiarioTO = new BuscarExtratoBeneficiarioTO();
    listaExtratoBeneficiario: ExtratoBeneficiario[] = [];
    private _listaExtratoBeneficiario: ExtratoBeneficiario[] = [];

    constructor(private navParams: NavParams,
                private navCtrl: NavController,
                private extratoBeneficiarioService: ExtratoBeneficiarioService,
                private loadingCtrl: LoadingController,
                private storageService: StorageService,
                private toastHelper: ToastHelper) {

    }

    ionViewDidLoad(): void {
        this.buscarExtratoBeneficiarioTO = this.navParams.get('buscarExtratoBeneficiarioTO');
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        let dataInicial = new Date(this.buscarExtratoBeneficiarioTO.dataInicial.toString().replace(/-/g, '\/'));
        let dataFinal = new Date(this.buscarExtratoBeneficiarioTO.dataFinal.toString().replace(/-/g, '\/'));
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == TipoBuscaExtratoBeneficiarioEnum.Individual) {
            if (this.buscarExtratoBeneficiarioTO.beneficiario) {
                this.extratoBeneficiarioService.buscarExtratoBeneficiarioIndividual(
                    this.buscarExtratoBeneficiarioTO.beneficiario.matriculaCassems,
                    `${dataInicial.getDate()}-${dataInicial.getMonth() + 1}-${dataInicial.getFullYear()}`,
                    `${dataFinal.getDate()}-${dataFinal.getMonth() + 1}-${dataFinal.getFullYear()}`
                )
                    .subscribe((lista: ExtratoBeneficiario[]) => {
                        this.listaExtratoBeneficiario = lista;
                        this._listaExtratoBeneficiario = lista;
                        loader.dismiss();
                    }, error => {
                        this.toastHelper.notificacaoErroCarregarDados();
                        loader.dismiss();
                    });
            } else {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                this.navCtrl.pop();
            }
        } else {
            this.storageService.getBeneficiarioTitular()
                .then(beneficiario => {
                    this.extratoBeneficiarioService.buscarExtratoBeneficiarioGrupo(
                        beneficiario.cpf,
                        `${dataInicial.getDate()}-${dataInicial.getMonth() + 1}-${dataInicial.getFullYear()}`,
                        `${dataFinal.getDate()}-${dataFinal.getMonth() + 1}-${dataFinal.getFullYear()}`
                    )
                        .subscribe((lista: ExtratoBeneficiario[]) => {
                            this.listaExtratoBeneficiario = lista;
                            this._listaExtratoBeneficiario = lista;
                            loader.dismiss();
                        }, () => {
                            this.toastHelper.notificacaoErroCarregarDados();
                            loader.dismiss();
                        });
                }, () => {
                    this.toastHelper.notificacaoErroCarregarDados();
                    loader.dismiss();
                });
        }

    }

    buscarExtratoBeneficiario(event: any) {
        this.listaExtratoBeneficiario = this._listaExtratoBeneficiario;
        let val = event.target.value;
        if (val && val.trim() != '') {
            this.listaExtratoBeneficiario = this.listaExtratoBeneficiario.filter((extratoBeneficiario: ExtratoBeneficiario) => {
                return (extratoBeneficiario.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    extratoBeneficiario.descProcedimento.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    visualizarExtratoBeneficiario(extratoBeneficiario: ExtratoBeneficiario) {
        this.navCtrl.push('ExtratoBeneficiarioPage', {'ExtratoBeneficiario': extratoBeneficiario});
    }

    recarregarDados(refresher) {
        let dataInicial = new Date(this.buscarExtratoBeneficiarioTO.dataInicial.toString().replace(/-/g, '\/'));
        let dataFinal = new Date(this.buscarExtratoBeneficiarioTO.dataFinal.toString().replace(/-/g, '\/'));
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == TipoBuscaExtratoBeneficiarioEnum.Individual) {
            if (this.buscarExtratoBeneficiarioTO.beneficiario) {
                this.extratoBeneficiarioService.buscarExtratoBeneficiarioIndividual(
                    this.buscarExtratoBeneficiarioTO.beneficiario.matriculaCassems,
                    `${dataInicial.getDate()}-${dataInicial.getMonth() + 1}-${dataInicial.getFullYear()}`,
                    `${dataFinal.getDate()}-${dataFinal.getMonth() + 1}-${dataFinal.getFullYear()}`
                )
                    .subscribe((lista: ExtratoBeneficiario[]) => {
                        this.listaExtratoBeneficiario = lista;
                        this._listaExtratoBeneficiario = lista;
                        refresher.complete();
                    }, error => {
                        this.toastHelper.notificacaoErroCarregarDados();
                        refresher.complete();
                    });
            } else {
                this.toastHelper.notificacaoErroCarregarDados();
                refresher.complete();
                this.navCtrl.pop();
            }
        } else {
            this.storageService.getBeneficiarioTitular()
                .then(beneficiario => {
                    this.extratoBeneficiarioService.buscarExtratoBeneficiarioGrupo(
                        beneficiario.cpf,
                        `${dataInicial.getDate()}-${dataInicial.getMonth() + 1}-${dataInicial.getFullYear()}`,
                        `${dataFinal.getDate()}-${dataFinal.getMonth() + 1}-${dataFinal.getFullYear()}`
                    )
                        .subscribe((lista: ExtratoBeneficiario[]) => {
                            this.listaExtratoBeneficiario = lista;
                            this._listaExtratoBeneficiario = lista;
                            refresher.complete();
                        }, () => {
                            this.toastHelper.notificacaoErroCarregarDados();
                            refresher.complete();
                        });
                }, () => {
                    this.toastHelper.notificacaoErroCarregarDados();
                    refresher.complete();
                });
        }
    }

}