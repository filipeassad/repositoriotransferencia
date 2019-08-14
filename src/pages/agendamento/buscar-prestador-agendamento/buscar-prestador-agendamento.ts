import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {Prestador} from "../../../models/prestador.model";
import {AgendamentoService} from "../../../providers/agendamento.service";
import {ToastHelper} from "../../../helpers/toast.helper";

@IonicPage()
@Component({
    selector: 'page-buscar-prestador-agendamento',
    templateUrl: 'buscar-prestador-agendamento.html'
})
export class BuscarPrestadorAgendamentoPage{

    listaPrestadores: Prestador[] = [];
    private _listaPrestadores: Prestador[] = [];

    private nome: string;
    private codCentroMedico: number;
    private codEspecialidade: number;
    private tipoBusca: string;


    constructor(private agendamentoService: AgendamentoService,
                private loadingCtrl: LoadingController,
                private navParams: NavParams,
                private navCtrl: NavController,
                private toastHelper: ToastHelper) {

    }

    ionViewDidLoad(): void {
        this.nome = this.navParams.get('nome');
        this.codCentroMedico = this.navParams.get('codCentroMedico');
        this.codEspecialidade = this.navParams.get('codEspecialidade');
        this.tipoBusca = this.navParams.get('tipoBusca');

        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.buscarListaCredenciado(this.codCentroMedico, this.codEspecialidade, this.nome).subscribe((lista: Prestador[]) => {
            this.listaPrestadores = lista;
            this._listaPrestadores = this.listaPrestadores;
            loader.dismiss();
        }, error => {
            this.toastHelper.notificacaoErroCarregarDados();
            this.navCtrl.pop();
            loader.dismiss();
        });
    }


    recarregarDados(refresher) {
        this.agendamentoService.buscarListaCredenciado(this.codCentroMedico, this.codEspecialidade, this.nome).subscribe((lista: Prestador[]) => {
            this.listaPrestadores = lista;
            this._listaPrestadores = this.listaPrestadores;
            refresher.complete();
        }, error => {
            this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    }

    buscarPrestador(event: any) {
        this.listaPrestadores = this._listaPrestadores;
        let val = event.target.value;
        if (val && val.trim() != '') {
            this.listaPrestadores = this.listaPrestadores.filter((prestador: Prestador) => {
                return (prestador.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    visualizarPrestador(prestador: Prestador) {
        this.navCtrl.push('EscolherDataAgendamentoPage', {
            'Prestador': prestador,
            'codEspecialidade': this.codEspecialidade,
            'codCentroMedico': this.codCentroMedico,
            'tipoBusca': this.tipoBusca
        });
    }
}