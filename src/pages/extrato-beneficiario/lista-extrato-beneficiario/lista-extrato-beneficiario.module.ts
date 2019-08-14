import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {ListaExtratoBeneficiarioPage} from "./lista-extrato-beneficiario";


@NgModule({
    declarations: [
        ListaExtratoBeneficiarioPage
    ],
    imports: [
        IonicPageModule.forChild(ListaExtratoBeneficiarioPage),
        PipeModule
    ],
    exports: [ListaExtratoBeneficiarioPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class ListaExtratoBeneficiarioModule {

}