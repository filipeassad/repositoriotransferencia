import {Component} from "@angular/core";
import {IonicPage, ViewController} from "ionic-angular";

@IonicPage()
@Component({
    selector: 'page-modal-termos-e-condicoes',
    templateUrl: 'modal-termos-e-condicoes.html'
})
export class ModalTermosECondicoesPage {

    constructor(public view: ViewController) {}

    dismiss() {
        this.view.dismiss();
    }
}