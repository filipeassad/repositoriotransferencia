import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {AgendamentoPage} from "./agendamento";


@NgModule({
    declarations: [
        AgendamentoPage
    ],
    imports: [
        IonicPageModule.forChild(AgendamentoPage),
        PipeModule
    ],
    exports: [AgendamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class AgendamentoModule {

}