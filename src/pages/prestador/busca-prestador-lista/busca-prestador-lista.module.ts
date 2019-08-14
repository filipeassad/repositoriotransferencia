import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {BuscaPrestadorListaPage} from "./busca-prestador-lista";

@NgModule({
    declarations:[
        BuscaPrestadorListaPage
    ],
    imports: [
        IonicPageModule.forChild(BuscaPrestadorListaPage),
        PipeModule
    ],
    exports: [BuscaPrestadorListaPage],
    schemas: [],
    providers: [],

})
export class BuscaPrestadorListaModule{

}