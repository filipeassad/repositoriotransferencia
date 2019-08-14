import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {BrMaskerModule} from "brmasker-ionic-3";
import {AtualizarEnderecoPage} from "./atualizar-endereco";

@NgModule({
    declarations: [
        AtualizarEnderecoPage
    ],
    imports: [
        IonicPageModule.forChild(AtualizarEnderecoPage),
        PipeModule,
        BrMaskerModule
    ],
    exports: [AtualizarEnderecoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class AtualizarEnderecoModule {

}