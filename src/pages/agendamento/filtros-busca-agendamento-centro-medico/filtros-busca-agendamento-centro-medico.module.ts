import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {FiltrosBuscaAgendamentoCentroMedicoPage} from "./filtros-busca-agendamento-centro-medico";


@NgModule({
    declarations: [
        FiltrosBuscaAgendamentoCentroMedicoPage
    ],
    imports: [
        IonicPageModule.forChild(FiltrosBuscaAgendamentoCentroMedicoPage),
        PipeModule
    ],
    exports: [FiltrosBuscaAgendamentoCentroMedicoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class FiltrosBuscaAgendamentoCentroMedicoModule {

}