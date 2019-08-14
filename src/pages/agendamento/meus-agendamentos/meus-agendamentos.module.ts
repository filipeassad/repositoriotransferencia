import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {MeusAgendamentosPage} from "./meus-agendamentos";
import {PipeModule} from "../../../pipes/pipe.module";


@NgModule({
    declarations: [
        MeusAgendamentosPage
    ],
    imports: [
        IonicPageModule.forChild(MeusAgendamentosPage),
        PipeModule
    ],
    exports: [MeusAgendamentosPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class MeusAgendamentosModule {

}