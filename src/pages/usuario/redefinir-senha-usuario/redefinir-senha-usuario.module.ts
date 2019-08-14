import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {RedefinirSenhaUsuarioPage} from "./redefinir-senha-usuario";

@NgModule({
    declarations:[
        RedefinirSenhaUsuarioPage
    ],
    imports: [
        IonicPageModule.forChild(RedefinirSenhaUsuarioPage)
    ],
    exports: [RedefinirSenhaUsuarioPage],
    schemas: [],
    providers: [],

})
export class RedefinirSenhaUsuarioModule{

}