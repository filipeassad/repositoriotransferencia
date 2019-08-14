import {Component} from "@angular/core";
import {IonicPage, NavParams} from "ionic-angular";
import {ExtratoBeneficiario} from "../../../models/extrato-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-extrato-beneficiario',
    templateUrl: 'extrato-beneficiario.html'
})
export class ExtratoBeneficiarioPage {

    extratoBeneficiario: ExtratoBeneficiario = new ExtratoBeneficiario();
    tipoCaraterAtendimentoDescricao: string = '';

    constructor(private navParams: NavParams) {

    }

    ionViewDidLoad(): void {
        this.extratoBeneficiario = this.navParams.get('ExtratoBeneficiario');
        if(this.extratoBeneficiario.caraterAtendimento){
            if(this.extratoBeneficiario.caraterAtendimento == '1'){
                this.tipoCaraterAtendimentoDescricao = 'Eletivo';
            }else{
                this.tipoCaraterAtendimentoDescricao = 'Urgência/Emergência';
            }
        }else{
            this.tipoCaraterAtendimentoDescricao = 'Sem Informação';
        }
    }

}