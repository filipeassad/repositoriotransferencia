import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {BuscarPrestadorAgendamentoPage} from "./buscar-prestador-agendamento";


@NgModule({
    declarations: [
        BuscarPrestadorAgendamentoPage
    ],
    imports: [
        IonicPageModule.forChild(BuscarPrestadorAgendamentoPage),
        PipeModule
    ],
    exports: [BuscarPrestadorAgendamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class BuscarPrestadorAgendamentoModule {

}