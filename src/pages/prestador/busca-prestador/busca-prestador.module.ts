import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {BuscaPrestadorPage} from "./busca-prestador";
import {PipeModule} from "../../../pipes/pipe.module";

@NgModule({
    declarations:[
        BuscaPrestadorPage
    ],
    imports: [
        IonicPageModule.forChild(BuscaPrestadorPage),
        PipeModule
    ],
    exports: [BuscaPrestadorPage],
    schemas: [],
    providers: [],

})
export class BuscaPrestadorModule{

}