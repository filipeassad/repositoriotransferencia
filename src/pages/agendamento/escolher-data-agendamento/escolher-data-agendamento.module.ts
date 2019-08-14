import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {EscolherDataAgendamentoPage} from "./escolher-data-agendamento";


@NgModule({
    declarations: [
        EscolherDataAgendamentoPage
    ],
    imports: [
        IonicPageModule.forChild(EscolherDataAgendamentoPage),
        PipeModule
    ],
    exports: [EscolherDataAgendamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class EscolherDataAgendamentoModule {

}