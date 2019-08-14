import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {PerfilPage} from "./perfil";
import {PipeModule} from "../../../pipes/pipe.module";

@NgModule({
    declarations:[
        PerfilPage
    ],
    imports: [
        IonicPageModule.forChild(PerfilPage),
        PipeModule
    ],
    exports: [PerfilPage],
    schemas: [],
    providers: [],

})
export class PerfilModule{

}