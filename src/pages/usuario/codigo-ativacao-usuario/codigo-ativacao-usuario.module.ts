import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CodigoAtivacaoUsuarioPage} from "./codigo-ativacao-usuario";
import {PipeModule} from "../../../pipes/pipe.module";

@NgModule({
    declarations:[
        CodigoAtivacaoUsuarioPage
    ],
    imports: [
        IonicPageModule.forChild(CodigoAtivacaoUsuarioPage),
        PipeModule
    ],
    exports: [CodigoAtivacaoUsuarioPage],
    schemas: [],
    providers: [],

})
export class CodigoAtivacaoUsuarioModule{

}