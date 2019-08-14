import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IonicPage, NavController} from "ionic-angular";
import {BuscaDemonstrativoPagamentoTO} from "../../../models/to/busca-demonstrativo-pagamento.to.model";
import {IosHelper} from "../../../helpers/ios.helper";

@IonicPage()
@Component({
    selector: 'page-buscar-demonstrativo-pagamento',
    templateUrl: 'buscar-demonstrativo-pagamento.html'
})
export class BuscarDemonstrativoPagamentoPage {

    buscaDemonstrativoPagamentoTO: BuscaDemonstrativoPagamentoTO = new BuscaDemonstrativoPagamentoTO();
    buscaForm: FormGroup;

    constructor(private navCtrl: NavController,
                private iosHelper: IosHelper
    ) {
        this.buscaForm = new FormGroup({
            ano: new FormControl('', Validators.required)
        });
    }

    ionViewDidLoad() {
        this.iosHelper.mostrarLoaderTemporario();
    }

    buscarDemonstrativoPagamento() {
        this.navCtrl.push('DemonstrativoPagamentoPage', {'buscaDemonstrativoPagamentoTO': this.buscaDemonstrativoPagamentoTO});
    }

}