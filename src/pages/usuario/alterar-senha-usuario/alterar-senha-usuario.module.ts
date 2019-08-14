import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {AlterarSenhaUsuarioPage} from "./alterar-senha-usuario";
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    declarations:[
        AlterarSenhaUsuarioPage
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(AlterarSenhaUsuarioPage)
    ],
    exports: [AlterarSenhaUsuarioPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AlterarSenhaUsuarioModule{

}