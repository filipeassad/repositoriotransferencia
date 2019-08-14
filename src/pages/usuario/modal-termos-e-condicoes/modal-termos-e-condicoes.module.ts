import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ModalTermosECondicoesPage} from "./modal-termos-e-condicoes";

@NgModule({
    declarations:[
        ModalTermosECondicoesPage
    ],
    imports: [
        IonicPageModule.forChild(ModalTermosECondicoesPage)
    ],
    exports: [ModalTermosECondicoesPage],
    schemas: [],
    providers: [],

})
export class ModalTermosECondicoesModule{

}