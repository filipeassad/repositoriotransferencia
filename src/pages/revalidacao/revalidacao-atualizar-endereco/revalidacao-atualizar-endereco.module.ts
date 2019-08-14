import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {RevalidacaoAtualizarEnderecoPage} from "./revalidacao-atualizar-endereco";


@NgModule({
    declarations: [
        RevalidacaoAtualizarEnderecoPage
    ],
    imports: [
        IonicPageModule.forChild(RevalidacaoAtualizarEnderecoPage),
        PipeModule
    ],
    exports: [RevalidacaoAtualizarEnderecoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class RevalidacaoAtualizarEnderecoModule {

}