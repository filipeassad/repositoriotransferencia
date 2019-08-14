import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {BuscarExtratoBeneficiarioTitularPage} from "./buscar-extrato-beneficiario-titular";
import {PipeModule} from "../../../../pipes/pipe.module";


@NgModule({
    declarations: [
        BuscarExtratoBeneficiarioTitularPage
    ],
    imports: [
        IonicPageModule.forChild(BuscarExtratoBeneficiarioTitularPage),
        PipeModule
    ],
    exports: [BuscarExtratoBeneficiarioTitularPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class BuscarExtratoBeneficiarioTitularModule {

}