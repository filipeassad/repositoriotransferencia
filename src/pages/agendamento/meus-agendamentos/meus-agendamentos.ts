import {Component,} from "@angular/core";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {Agendamento} from "../../../models/agendamento.model";
import {ToastHelper} from "../../../helpers/toast.helper";
import {AgendamentoService} from "../../../providers/agendamento.service";
import {StorageService} from "../../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-meus-agendamentos',
    templateUrl: 'meus-agendamentos.html'
})
export class MeusAgendamentosPage {

    listaAgendamentos: Agendamento[] = [];
    listaBeneficiarios: EnViPortalBeneficiario[] = [];
    beneficiario: EnViPortalBeneficiario;
    selectMatriculaBeneficiario: string;


    constructor(private toastHelper: ToastHelper,
                private navCtrl: NavController,
                private navParams: NavParams,
                private loadingCtrl: LoadingController,
                private agendamentoService: AgendamentoService,
                private storageService: StorageService) {
    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.beneficiario = this.navParams.get('Beneficiario');
        if (!this.beneficiario) {
            Promise.all([
                this.storageService.getBeneficiario(),
                this.storageService.getGrupoFamiliar()
            ])
                .then(result => {
                    this.beneficiario = result[0];
                    if (this.beneficiario.titular === 'S') {
                        this.listaBeneficiarios = result[1];
                    } else {
                        this.listaBeneficiarios = [this.beneficiario];
                    }
                    this.selectMatriculaBeneficiario = this.beneficiario.matriculaCassems;

                    this.agendamentoService.listarAgendaBeneficiario(this.beneficiario.matriculaCassems).subscribe((lista: Agendamento[]) => {
                        lista = lista.map((agendamento: Agendamento) => {
                            return this.montarDataFinal(agendamento);
                        });
                        this.listaAgendamentos = lista;
                        loader.dismiss();
                    }, () => {
                        loader.dismiss();
                        this.toastHelper.notificacaoErroCarregarDados();
                    });
                }, () => {
                    loader.dismiss();
                    this.toastHelper.notificacaoErroCarregarDados();
                });
        } else {
            this.selectMatriculaBeneficiario = this.beneficiario.matriculaCassems;
            this.storageService.getGrupoFamiliar()
                .then(grupoFamilar => {
                    this.listaBeneficiarios = grupoFamilar;
                    this.agendamentoService.listarAgendaBeneficiario(this.beneficiario.matriculaCassems).subscribe((lista: Agendamento[]) => {
                        lista = lista.map((agendamento: Agendamento) => {
                            return this.montarDataFinal(agendamento);
                        });
                        this.listaAgendamentos = lista;
                        loader.dismiss();
                    }, () => {
                        loader.dismiss();
                        this.toastHelper.notificacaoErroCarregarDados();
                    });
                }, () => {
                    loader.dismiss();
                    this.toastHelper.notificacaoErroCarregarDados();
                });
        }
    }

    recarregarDados(refresher) {
        this.agendamentoService.listarAgendaBeneficiario(this.beneficiario.matriculaCassems).subscribe((lista: Agendamento[]) => {
            lista = lista.map((agendamento: Agendamento) => {
                return this.montarDataFinal(agendamento);
            });
            this.listaAgendamentos = lista;
            refresher.complete();
        }, () => {
            refresher.complete();
            this.toastHelper.notificacaoErroCarregarDados();
        });
    }

    alterarBeneficiario() {
        if (this.beneficiario.matriculaCassems != this.selectMatriculaBeneficiario) {
            let beneficiario = this.listaBeneficiarios.find((beneficiario: EnViPortalBeneficiario) => {
                return this.selectMatriculaBeneficiario === beneficiario.matriculaCassems;
            });
            this.navCtrl.setRoot('MeusAgendamentosPage', {'Beneficiario': beneficiario});
        }
    }


    visualizarAgendamento(agendamento: Agendamento) {
        this.navCtrl.push('AgendamentoPage', {
            'Agendamento': agendamento,
            'Beneficiario': this.beneficiario
        });
    }

    novoAgendamento() {
        this.navCtrl.push('TipoAgendamentoPage');
    }

    private montarDataFinal(agendamento: Agendamento) {
        let array = agendamento.dataFormatada.split('/');
        agendamento.dataFinal = new Date(Number(array[2]), Number(array[1]) - 1, Number(array[0]));
        let hora = agendamento.horaFormatada.split(':');
        agendamento.dataFinal.setHours(Number(hora[0]), Number(hora[1]));

        return agendamento;
    }


}