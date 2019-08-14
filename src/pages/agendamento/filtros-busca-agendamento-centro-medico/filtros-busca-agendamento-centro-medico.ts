import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {Especialidade} from "../../../models/especialidade.model";
import {CentroMedico} from "../../../models/centro-medico.model";
import {ToastHelper} from "../../../helpers/toast.helper";
import {AgendamentoService} from "../../../providers/agendamento.service";

@IonicPage()
@Component({
    selector: 'page-filtros-busca-agendamento-centro-medico',
    templateUrl: 'filtros-busca-agendamento-centro-medico.html'
})
export class FiltrosBuscaAgendamentoCentroMedicoPage {

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
            'codCentroMedico': new FormControl('', Validators.required),
            'codEspecialidade': new FormControl('')
        });

    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.buscarListaCentroMedico().subscribe((lista: CentroMedico[]) => {
            if (lista.length) {
                this.listaCentroMedicos = lista;
                loader.dismiss();
            } else {
                this.toastHelper.notificacaoMensagem('Não há centros médicos');
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
            'codCentroMedico': this.codCentroMedico,
            'codEspecialidade': this.codEspecialidade,
            'tipoBusca': "cm"
        });
    }

    buscarEspecialidade() {
        this.codEspecialidade = null;
        if (this.codCentroMedico) {
            let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader.present();
            this.agendamentoService.buscarListaEspecialidade(this.codCentroMedico).subscribe((lista: Especialidade[]) => {
                if (!lista.length) {
                    this.toastHelper.notificacaoMensagem('Não existem centros médicos para esta especialidade');
                    this.listaEspecialidades = [];
                } else {
                    this.listaEspecialidades = lista;
                }
                loader.dismiss();
            }, erro => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
            });
        } else {
            this.listaEspecialidades = [];
        }
    }

    limparCamposBusca() {
        this.codEspecialidade = null;
        this.codCentroMedico = null;
    }
}