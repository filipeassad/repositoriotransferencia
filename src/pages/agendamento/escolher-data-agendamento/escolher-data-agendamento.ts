import {Component} from "@angular/core";
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {Observable} from "rxjs/Observable";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Prestador} from "../../../models/prestador.model";
import {Especialidade} from "../../../models/especialidade.model";
import {CentroMedico} from "../../../models/centro-medico.model";
import {AgendamentoService} from "../../../providers/agendamento.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {StorageService} from "../../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-escolher-data-agendamento',
    templateUrl: 'escolher-data-agendamento.html'
})
export class EscolherDataAgendamentoPage {

    prestador: Prestador;
    tipoBusca: string;
    codEspecialidade: number;
    codCentroMedico: number;
    dataAgendamento: string;
    horaAgendamento: string;
    beneficiario: EnViPortalBeneficiario;
    matriculaCassems: string;
    listaEspecialidades: Especialidade[] = [];
    listaCentroMedicos: CentroMedico[] = [];
    listaDatasAgendamento: any[] = [];
    listaGrupoFamiliar: EnViPortalBeneficiario[] = [];
    agendamentoForm: FormGroup;

    constructor(private agendamentoService: AgendamentoService,
                private loadingCtrl: LoadingController,
                private navParams: NavParams,
                private navCtrl: NavController,
                private toastHelper: ToastHelper,
                private storageService: StorageService,
                private alertCtrl: AlertController) {
        this.prestador = this.navParams.get('Prestador');
        this.codCentroMedico = this.navParams.get('codCentroMedico');
        this.codEspecialidade = this.navParams.get('codEspecialidade');
        this.tipoBusca = this.navParams.get('tipoBusca');

        this.agendamentoForm = new FormGroup({
            'nome': new FormControl({value: this.prestador.nome, disabled: true}),
            'codCentroMedico': new FormControl('', Validators.required),
            'codEspecialidade': new FormControl('', Validators.required),
            'dataAgendamento': new FormControl('', Validators.required),
            'matriculaCassems': new FormControl('', Validators.required)
        });
    }

    ionViewDidLoad(): void {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();

        let buscaEspecialidadeCentroMedico = new Promise((resolve, reject) => {

            if (this.tipoBusca == 'prestador') {
                this.agendamentoService.buscarListaEspecialidade(null, this.prestador.codCredenciado).subscribe((lista: Especialidade[]) => {
                    if (lista.length) {
                        this.listaEspecialidades = lista;
                        resolve();
                    } else {
                        reject('Não há dados na lista de especialidades');
                    }
                }, error => reject(error));
            } else {
                if (this.tipoBusca == 'especialidade') {
                    if (this.codCentroMedico) {
                        Observable.forkJoin(
                            this.agendamentoService.buscarListaEspecialidade(this.codCentroMedico, this.prestador.codCredenciado),
                            this.agendamentoService.buscarListaCentroMedico(this.codEspecialidade, this.prestador.codCredenciado),
                            this.agendamentoService.buscarAgendaPrestador(this.prestador.codCredenciado, this.codCentroMedico)
                        ).subscribe(result => {
                            this.listaEspecialidades = result[0];
                            this.listaCentroMedicos = result[1];
                            if (!result[2].length) {
                                this.toastHelper.notificacaoMensagem('Não há datas disponíveis para agendamento');
                                this.listaDatasAgendamento = [];
                            } else {
                                result[2] = result[2].map(obj => {
                                    obj.horaFormatada = /\d{2}:\d{2}/.exec(obj.horaFormatada);
                                    return obj;
                                });
                                this.listaDatasAgendamento = result[2];
                            }
                            resolve();
                        }, error => reject(error));
                    } else {
                        Observable.forkJoin(
                            this.agendamentoService.buscarListaEspecialidade(null, this.prestador.codCredenciado),
                            this.agendamentoService.buscarListaCentroMedico(this.codEspecialidade, this.prestador.codCredenciado)
                        ).subscribe(result => {
                            this.listaEspecialidades = result[0];
                            this.listaCentroMedicos = result[1];
                            resolve();
                        }, error => reject(error));
                    }
                } else {
                    if (this.codEspecialidade) {
                        Observable.forkJoin(
                            this.agendamentoService.buscarListaCentroMedico(this.codEspecialidade, this.prestador.codCredenciado),
                            this.agendamentoService.buscarListaEspecialidade(this.codCentroMedico, this.prestador.codCredenciado),
                            this.agendamentoService.buscarAgendaPrestador(this.prestador.codCredenciado, this.codCentroMedico)
                        ).subscribe(result => {
                            this.listaCentroMedicos = result[0];
                            this.listaEspecialidades = result[1];
                            if (!result[2].length) {
                                this.toastHelper.notificacaoMensagem('Não há datas disponíveis para agendamento');
                                this.listaDatasAgendamento = [];
                            } else {
                                result[2] = result[2].map(obj => {
                                    obj.horaFormatada = /\d{2}:\d{2}/.exec(obj.horaFormatada);
                                    return obj;
                                });
                                this.listaDatasAgendamento = result[2];
                            }
                            resolve();
                        }, error => reject(error));
                    } else {
                        Observable.forkJoin(
                            this.agendamentoService.buscarListaCentroMedico(null, this.prestador.codCredenciado),
                            this.agendamentoService.buscarListaEspecialidade(this.codCentroMedico, this.prestador.codCredenciado)
                        ).subscribe(result => {
                            this.listaCentroMedicos = result[0];
                            this.listaEspecialidades = result[1];
                            resolve();
                        }, error => reject(error));
                    }
                }
            }
        });

        buscaEspecialidadeCentroMedico.then(() => {
            Promise.all([
                this.storageService.getBeneficiario(),
                this.storageService.getGrupoFamiliar()
            ]).then(result => {
                if (result[0].titular === 'S') {
                    this.listaGrupoFamiliar = result[1];
                } else {
                    this.listaGrupoFamiliar = [result[0]];
                }
                loader.dismiss();
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

    confirmarAgendamento() {
        let especialidade = this.listaEspecialidades.filter((obj: Especialidade) => obj.codEspecialidade == this.codEspecialidade)[0];
        let centroMedico = this.listaCentroMedicos.filter((obj: CentroMedico) => obj.codCentroMedico == this.codCentroMedico)[0];
        let dataAgendamento = /\d{2}\/\d{2}\/\d{4}/.exec(this.dataAgendamento).toString();
        this.navCtrl.push('ConfirmarAgendamentoPage', {
            'Beneficiario': this.beneficiario,
            'Especialidade': especialidade,
            'CentroMedico': centroMedico,
            'Prestador': this.prestador,
            'dataAgendamento': dataAgendamento,
            'horaAgendamento': this.horaAgendamento
        });
    }

    buscarEspecialidade() {
        if (this.codCentroMedico) {
            this.codEspecialidade = null;
            this.dataAgendamento = null;
            this.listaDatasAgendamento = [];
            let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader.present();
            this.agendamentoService.buscarListaEspecialidade(this.codCentroMedico, this.prestador.codCredenciado).subscribe((lista: Especialidade[]) => {
                this.listaEspecialidades = lista;
                if (!lista.length) {
                    this.toastHelper.notificacaoMensagem('Não há especialidades disponíveis para este centro médico');
                }
                loader.dismiss();
            }, error => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                this.navCtrl.pop();
            });
        }
    }

    buscarCentroMedico() {
        if (this.codEspecialidade) {
            this.codCentroMedico = null;
            this.dataAgendamento = null;
            this.listaDatasAgendamento = [];
            let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader.present();
            this.agendamentoService.buscarListaCentroMedico(this.codEspecialidade, this.prestador.codCredenciado).subscribe((lista: CentroMedico[]) => {
                this.listaCentroMedicos = lista;
                if (!lista.length) {
                    this.toastHelper.notificacaoMensagem('Não há centros médicos disponíveis para esta especialidade');
                }
                loader.dismiss();
            }, error => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                this.navCtrl.pop();
            })
        }
    }

    buscarAgendaPrestador() {
        if (this.codCentroMedico) {
            this.dataAgendamento = null;
            this.horaAgendamento = null;
            let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader.present();
            this.agendamentoService.buscarAgendaPrestador(this.prestador.codCredenciado, this.codCentroMedico).subscribe(lista => {
                if (!lista.length) {
                    this.toastHelper.notificacaoMensagem('Não há datas disponíveis para agendamento');
                    this.listaDatasAgendamento = [];
                } else {
                    lista = lista.map(obj => {
                        obj.horaFormatada = /\d{2}:\d{2}/.exec(obj.horaFormatada);
                        return obj;
                    });
                    this.listaDatasAgendamento = lista;
                }
                loader.dismiss();
            }, error => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                this.navCtrl.pop();
            });
        }
    }

    abrirInformacoes() {
        let alert = this.alertCtrl.create({
            title: 'Agendamento',
            subTitle: 'Os atendimentos são realizados por ordem de chegada',
            buttons: ['OK']
        });
        alert.present();
    }

    atribuirHora() {
        if (this.dataAgendamento) {
            this.horaAgendamento = /\d{2}:\d{2}/.exec(this.dataAgendamento).toString();
        } else {
            this.horaAgendamento = null;
        }
    }

    atribuirBeneficiario() {
        this.beneficiario = this.listaGrupoFamiliar.find((beneficiario: EnViPortalBeneficiario) => {
            return (beneficiario.matriculaCassems == this.matriculaCassems);
        });
    }
}