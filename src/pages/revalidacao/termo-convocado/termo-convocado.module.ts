import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {TermoConvocadoPage} from "./termo-convocado";


@NgModule({
    declarations: [
      TermoConvocadoPage
    ],
    imports: [
        IonicPageModule.forChild(TermoConvocadoPage),
        PipeModule
    ],
    exports: [TermoConvocadoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class TermoConvocadoModule {

}
