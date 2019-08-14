import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {BuscarExtratoBeneficiarioDependentePage} from "./buscar-extrato-beneficiario-dependente";
import {PipeModule} from "../../../../pipes/pipe.module";


@NgModule({
    declarations: [
        BuscarExtratoBeneficiarioDependentePage
    ],
    imports: [
        IonicPageModule.forChild(BuscarExtratoBeneficiarioDependentePage),
        PipeModule
    ],
    exports: [BuscarExtratoBeneficiarioDependentePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class BuscarExtratoBeneficiarioDependenteModule {

}