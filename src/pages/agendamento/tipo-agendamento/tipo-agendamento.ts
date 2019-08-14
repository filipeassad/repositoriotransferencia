import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";

@IonicPage()
@Component({
    selector: 'page-tipo-agendamento',
    templateUrl: 'tipo-agendamento.html'
})
export class TipoAgendamentoPage {

    constructor(private navCtrl: NavController) {

    }

    realizarAgendamentoPor(tipo: string) {
        if (tipo == 'prestador') {
            this.navCtrl.push('FiltrosBuscaAgendamentoPrestadorPage');
        } else {
            if (tipo == 'especialidade') {
                this.navCtrl.push('FiltrosBuscaAgendamentoEspecialidadePage');
            } else {
                this.navCtrl.push('FiltrosBuscaAgendamentoCentroMedicoPage');
            }
        }
    }

}