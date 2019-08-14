import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {SegundaViaBoletoPage} from "./segunda-via-boleto";


@NgModule({
    declarations: [
        SegundaViaBoletoPage
    ],
    imports: [
        IonicPageModule.forChild(SegundaViaBoletoPage),
        PipeModule
    ],
    exports: [SegundaViaBoletoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class SegundaViaBoletoModule {

}