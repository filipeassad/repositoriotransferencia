import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {CentroMedico} from "../../../models/centro-medico.model";
import {Especialidade} from "../../../models/especialidade.model";
import {ToastHelper} from "../../../helpers/toast.helper";
import {AgendamentoService} from "../../../providers/agendamento.service";

@IonicPage()
@Component({
    selector: 'page-filtros-busca-agendamento-especialidade',
    templateUrl: 'filtros-busca-agendamento-especialidade.html'
})
export class FiltrosBuscaAgendamentoEspecialidadePage {

    buscarForm: FormGroup;
    codEspecialidade: number;
    codCentroMedico: number;
    listaEspecialidades: Especialidade[] = [];
    listaCentroMedicos: CentroMedico[] = [];

    constructor(private toastHelper: ToastHelper,
                private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private agendamentoService: AgendamentoService) {
        this.buscarForm = new FormGroup({
            'codEspecialidade': new FormControl('', Validators.required),
            'codCentroMedico': new FormControl('')
        });

    }

    ionViewDidLoad() {

        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.buscarListaEspecialidade().subscribe((lista: Especialidade[]) => {
            if (lista.length) {
                this.listaEspecialidades = lista;
                loader.dismiss();
            } else {
                this.toastHelper.notificacaoMensagem('Não há especialidades');
                loader.dismiss();
                this.navCtrl.pop();
            }
        }, erro => {
            this.toastHelper.notificacaoErroCarregarDados();
            loader.dismiss();
            this.navCtrl.pop();
        });
    }

    buscarPrestador() {
        this.navCtrl.push('BuscarPrestadorAgendamentoPage', {
            'codEspecialidade': this.codEspecialidade,
            'codCentroMedico': this.codCentroMedico,
            'tipoBusca': "especialidade"
        });
    }

    buscarCentroMedico() {
        this.codCentroMedico = null;
        if (this.codEspecialidade) {
            let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader.present();
            this.agendamentoService.buscarListaCentroMedico(this.codEspecialidade).subscribe((lista: CentroMedico[]) => {
                if (!lista.length) {
                    this.toastHelper.notificacaoMensagem('Não há centros médicos para esta especialidade');
                    this.listaCentroMedicos = [];
                } else {
                    this.listaCentroMedicos = lista;
                }
                loader.dismiss();
            }, erro => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
            });
        } else {
            this.listaCentroMedicos = [];
        }
    }

    limparCamposBusca() {
        this.codEspecialidade = null;
        this.codCentroMedico = null;
    }
}