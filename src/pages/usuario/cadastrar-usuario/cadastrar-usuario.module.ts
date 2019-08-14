import {CadastrarUsuarioPage} from "./cadastrar-usuario";
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";

@NgModule({
    declarations:[
        CadastrarUsuarioPage
    ],
    imports: [
        IonicPageModule.forChild(CadastrarUsuarioPage)
    ],
    exports: [CadastrarUsuarioPage],
    schemas: [],
    providers: [],

})
export class CadastrarUsuarioModule{

}