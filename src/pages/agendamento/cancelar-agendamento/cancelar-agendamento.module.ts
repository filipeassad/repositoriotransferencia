import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {CancelarAgendamentoPage} from "./cancelar-agendamento";
import {DirectiveModule} from "../../../directives/directive.module";


@NgModule({
    declarations: [
        CancelarAgendamentoPage
    ],
    imports: [
        IonicPageModule.forChild(CancelarAgendamentoPage),
        PipeModule,
        DirectiveModule
    ],
    exports: [CancelarAgendamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class AgendamentoModule {

}