import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Agendamento} from "../../../models/agendamento.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastHelper} from "../../../helpers/toast.helper";
import {AgendamentoService} from "../../../providers/agendamento.service";

@IonicPage()
@Component({
    selector: 'page-cancelar-agendamento',
    templateUrl: 'cancelar-agendamento.html'
})
export class CancelarAgendamentoPage {

    agendamento: Agendamento;
    motivoCancelamento: string;
    cancelarAgendamentoForm: FormGroup;

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController,
        private toastHelper: ToastHelper,
        private agendamentoService: AgendamentoService
    ) {
        this.agendamento = this.navParams.get('Agendamento');
        this.cancelarAgendamentoForm = new FormGroup({
            'motivoCancelamento': new FormControl('', [Validators.required, Validators.maxLength(400)])
        });
    }

    cancelarAgendamento(){
        if(this.motivoCancelamento.trim() !== '') {
            this.agendamentoService.cancelarAgendamento(this.agendamento.idGuia, this.motivoCancelamento)
                .subscribe(response => {
                    this.toastHelper.notificacaoMensagem('Cancelamento realizado com sucesso');
                    this.navCtrl.setRoot('MeusAgendamentosPage');
                }, error => {
                    this.toastHelper.notificacaoMensagem('Ocorreu um erro ao cancelar o agendamento, por favor tente novamente mais tarde');
                });
        }else{
            this.toastHelper.notificacaoMensagem('Por favor digite o motivo do cancelamento');
        }
    }
}