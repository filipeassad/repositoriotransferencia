import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {ConfirmarAgendamentoPage} from "./confirmar-agendamento";


@NgModule({
    declarations: [
        ConfirmarAgendamentoPage
    ],
    imports: [
        IonicPageModule.forChild(ConfirmarAgendamentoPage),
        PipeModule
    ],
    exports: [ConfirmarAgendamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class ConfirmarAgendamentoModule {

}