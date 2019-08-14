import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {FiltrosBuscaAgendamentoEspecialidadePage} from "./filtros-busca-agendamento-especialidade";


@NgModule({
    declarations: [
        FiltrosBuscaAgendamentoEspecialidadePage
    ],
    imports: [
        IonicPageModule.forChild(FiltrosBuscaAgendamentoEspecialidadePage),
        PipeModule
    ],
    exports: [FiltrosBuscaAgendamentoEspecialidadePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class FiltrosBuscaAgendamentoEspecialidadeModule {

}