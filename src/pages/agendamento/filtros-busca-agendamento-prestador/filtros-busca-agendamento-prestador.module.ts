import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {FiltrosBuscaAgendamentoPrestadorPage} from "./filtros-busca-agendamento-prestador";


@NgModule({
    declarations: [
        FiltrosBuscaAgendamentoPrestadorPage
    ],
    imports: [
        IonicPageModule.forChild(FiltrosBuscaAgendamentoPrestadorPage),
        PipeModule
    ],
    exports: [FiltrosBuscaAgendamentoPrestadorPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class FiltrosBuscaAgendamentoPrestadorModule {

}