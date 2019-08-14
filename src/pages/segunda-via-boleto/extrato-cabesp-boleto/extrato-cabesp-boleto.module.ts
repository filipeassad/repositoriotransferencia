import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {ExtratoCabespBoletoPage} from "./extrato-cabesp-boleto";


@NgModule({
    declarations: [
        ExtratoCabespBoletoPage
    ],
    imports: [
        IonicPageModule.forChild(ExtratoCabespBoletoPage),
        PipeModule
    ],
    exports: [ExtratoCabespBoletoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class ExtratoCabespBoletoModule {

}