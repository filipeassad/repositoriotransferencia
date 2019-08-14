import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {TipoAgendamentoPage} from "./tipo-agendamento";


@NgModule({
    declarations: [
        TipoAgendamentoPage
    ],
    imports: [
        IonicPageModule.forChild(TipoAgendamentoPage),
        PipeModule
    ],
    exports: [TipoAgendamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class TipoAgendamentoModule {

}