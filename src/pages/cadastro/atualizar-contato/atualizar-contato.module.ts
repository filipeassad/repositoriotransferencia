import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {AtualizarContatoPage} from "./atualizar-contato";
import {BrMaskerModule} from "brmasker-ionic-3";

@NgModule({
    declarations: [
        AtualizarContatoPage
    ],
    imports: [
        IonicPageModule.forChild(AtualizarContatoPage),
        PipeModule,
        BrMaskerModule
    ],
    exports: [AtualizarContatoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class AtualizarContatoModule {

}