import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IonicPage, NavController} from "ionic-angular";

@IonicPage()
@Component({
    selector: 'page-filtros-busca-agendamento-prestador',
    templateUrl: 'filtros-busca-agendamento-prestador.html'
})
export class FiltrosBuscaAgendamentoPrestadorPage {

    buscarForm: FormGroup;
    nome: string = '';

    constructor(private navCtrl: NavController) {
        this.buscarForm = new FormGroup({
            'nome': new FormControl('', Validators.required)
        });
    }

    buscarPrestador() {
        this.navCtrl.push('BuscarPrestadorAgendamentoPage', {
            'nome': this.nome,
            'tipoBusca': "prestador"
        });
    }
}