import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {ListaSegundaViaBoletoPage} from "./lista-segunda-via-boleto";


@NgModule({
    declarations: [
        ListaSegundaViaBoletoPage
    ],
    imports: [
        IonicPageModule.forChild(ListaSegundaViaBoletoPage),
        PipeModule
    ],
    exports: [ListaSegundaViaBoletoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class ListaSegundaViaBoletoModule {

}