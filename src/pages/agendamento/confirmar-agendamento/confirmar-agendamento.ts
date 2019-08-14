import {Component} from "@angular/core";
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {Prestador} from "../../../models/prestador.model";
import {Especialidade} from "../../../models/especialidade.model";
import {CentroMedico} from "../../../models/centro-medico.model";
import {AgendamentoService} from "../../../providers/agendamento.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {ValidaAgendamentoTO} from "../../../models/to/valida-agendamento.to.model";
import {EnPrestadorListaMensagemAppPortalModel} from "../../../models/en-prestador-lista-mensagem-app-portal.model";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-confirmar-agendamento',
    templateUrl: 'confirmar-agendamento.html'
})
export class ConfirmarAgendamentoPage {

    prestador: Prestador;
    especialidade: Especialidade;
    centroMedico: CentroMedico;
    dataAgendamento: string;
    horaAgendamento: string;
    beneficiario: EnViPortalBeneficiario;
    listaMensagens: EnPrestadorListaMensagemAppPortalModel[] = [];


    constructor(private agendamentoService: AgendamentoService,
                private loadingCtrl: LoadingController,
                private navParams: NavParams,
                private navCtrl: NavController,
                private toastHelper: ToastHelper,
                private alertCtrl: AlertController) {

        this.prestador = this.navParams.get('Prestador');
        this.centroMedico = this.navParams.get('CentroMedico');
        this.especialidade = this.navParams.get('Especialidade');
        this.beneficiario = this.navParams.get('Beneficiario');
        this.dataAgendamento = this.navParams.get('dataAgendamento');
        this.horaAgendamento = this.navParams.get('horaAgendamento');
    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.validarParametrosAgendamento(
            this.beneficiario.benId,
            this.especialidade.codEspecialidade,
            this.prestador.codCredenciado.toString(),
            this.centroMedico.codCentroMedico
        ).subscribe((validaAgendamento: ValidaAgendamentoTO) => {
            this.listaMensagens = validaAgendamento.listMensagem;
            loader.dismiss();
        }, error => loader.dismiss());
    }


    realizarAgendamento() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.agendar(
            this.beneficiario.matriculaCassems,
            this.dataAgendamento,
            this.horaAgendamento,
            this.especialidade.codEspecialidade,
            this.centroMedico.codCentroMedico,
            this.prestador.codCredenciado
        ).subscribe(result => {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Agendamento realizado com sucesso');
            this.navCtrl.setRoot('MeusAgendamentosPage');
        }, (error) => {
            loader.dismiss();
            if (error.status == 400) {
                this.toastHelper.notificacaoMensagem(error.error.motivoNegativa);
                this.navCtrl.pop();
            } else {
                this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar o agendamento, por favor tente novamente mais tarde');
            }
        });
    }

    abrirInformacoes() {
        let alert = this.alertCtrl.create({
            title: 'Agendamento',
            subTitle: 'Os atendimentos são realizados por ordem de chegada',
            buttons: ['OK']
        });
        alert.present();
    }

}
