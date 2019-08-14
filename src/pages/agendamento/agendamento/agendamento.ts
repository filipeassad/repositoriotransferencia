import {Component} from "@angular/core";
import {AlertController, IonicPage, NavController, NavParams} from "ionic-angular";
import {Agendamento} from "../../../models/agendamento.model";
import {Beneficiario} from "../../../models/beneficiario.model";
import {StatusAgendamentoKeys} from "../status-agendamento.keys";

@IonicPage()
@Component({
    selector: 'page-agendamento',
    templateUrl: 'agendamento.html'
})
export class AgendamentoPage {

    agendamento: Agendamento;
    beneficiario: Beneficiario;
    statusAutorizacao: string;

    constructor(private navParams: NavParams,
                private alertCtrl: AlertController,
                private navCtrl: NavController) {
        this.agendamento = this.navParams.get('Agendamento');
        this.beneficiario = this.navParams.get('Beneficiario');
        this.statusAutorizacao = StatusAgendamentoKeys.getStatusAgendamento(this.agendamento.status);
    }

    abrirInformacoes() {
        let alert = this.alertCtrl.create({
            title: 'Agendamento',
            subTitle: 'Os atendimentos são realizados por ordem de chegada',
            buttons: ['OK']
        });
        alert.present();
    }

    paginaCancelarAgendamento(){
        this.navCtrl.push('CancelarAgendamentoPage', {
            'Agendamento': this.agendamento
        });
    }
}